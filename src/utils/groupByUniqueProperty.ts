export default function groupByUniqueProperty(
  array: any[],
  uniqueProp: string,
  valueProp: string,
  additionalUniqueProp?: string
) {
  const groups = new Map<string, { items: any[]; sum: number }>();

  array.forEach((item) => {
    const uniqueKey = additionalUniqueProp
      ? `${item[uniqueProp]}-${item[additionalUniqueProp]}`
      : item[uniqueProp];
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
    const keys = key.split("-");
    return additionalUniqueProp
      ? {
          [uniqueProp]: keys[0],
          [additionalUniqueProp]: keys[1],
          items: group.items,
          sum: group.sum,
        }
      : { [uniqueProp]: key, items: group.items, sum: group.sum };
  });

  groupedItems = groupedItems.sort((a, b) => {
    if (a[uniqueProp] < b[uniqueProp]) return -1;
    if (a[uniqueProp] > b[uniqueProp]) return 1;
    return 0;
  });

  return groupedItems;
}
