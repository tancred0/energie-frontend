export default function slugify(oldSlug: string): [boolean, string] {

  const decodedSlug = decodeURIComponent(oldSlug).toLowerCase();

  if (/[ÄÖÜäöü]/i.test(decodedSlug)) {
    const newSlug = decodedSlug.replace(/ä|ö|ü|ß/gi, match => {
      switch (match.toLowerCase()) {
        case 'ä': return 'ae';
        case 'ö': return 'oe';
        case 'ü': return 'ue';
        case 'ß': return 'ss';
        default: return match;
      }
    });
    return [newSlug !== decodedSlug, newSlug];
  } else {
    return [false, decodedSlug];
  }
}
