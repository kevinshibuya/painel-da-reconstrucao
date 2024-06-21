type GroupedItem = {
  [key: string]: any;
  items?: any[];
  sum?: number;
};

export default function groupByUniqueProperty(
  array: any[],
  uniqueProps: string[],
  valueProps: string[],
  currentLevel: number = 0
): GroupedItem[] {
  if (currentLevel >= uniqueProps.length) {
    return array;
  }

  const uniqueProp = uniqueProps[currentLevel];
  const valueProp = valueProps[currentLevel];

  const groups = new Map<string, { items: any[]; sum: number }>();

  array.forEach((item) => {
    const uniqueKey = item[uniqueProp];
    const value = item[valueProp];

    if (groups.has(uniqueKey)) {
      const group = groups.get(uniqueKey) as {
        items: any[];
        sum: number;
      };

      group.items.push(item);
      group.sum += value;
    } else {
      groups.set(uniqueKey, { items: [item], sum: value });
    }
  });

  let groupedItems = Array.from(groups.entries()).map(([key, group]) => {
    return {
      [uniqueProp]: key,
      items: groupByUniqueProperty(
        group.items,
        uniqueProps,
        valueProps,
        currentLevel + 1
      ),
      sum: group.sum,
    };
  });

  groupedItems = groupedItems.sort((a, b) => {
    if (a[uniqueProp] < b[uniqueProp]) return -1;
    if (a[uniqueProp] > b[uniqueProp]) return 1;
    return 0;
  });

  return groupedItems;
}
