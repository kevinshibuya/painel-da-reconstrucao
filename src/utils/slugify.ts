export default function slugify(text: string): string {
  // Normalize the text to NFKD form, which separates characters from their diacritics
  text = text.normalize("NFKD");

  // Create an array to collect characters for the slug
  const slug: string[] = [];

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    const code = text.charCodeAt(i);

    // Remove diacritics (accents)
    if (code >= 0x0300 && code <= 0x036f) {
      continue;
    }

    // Convert to lowercase
    if (code >= 0x41 && code <= 0x5a) {
      // ASCII A-Z
      char = String.fromCharCode(code + 32);
    } else if (
      (code >= 0x61 && code <= 0x7a) ||
      (code >= 0x30 && code <= 0x39)
    ) {
      // ASCII a-z, 0-9
      // No conversion needed
    } else {
      // Replace any character that is not alphanumeric, a space, or a hyphen with a hyphen
      char = "-";
    }

    slug.push(char);
  }

  // Join the array into a string
  let slugString = slug.join("");

  // Replace multiple hyphens with a single hyphen
  slugString = slugString.replace(/-+/g, "-");

  // Remove leading and trailing hyphens
  slugString = slugString.replace(/^-+|-+$/g, "");

  return slugString;
}
