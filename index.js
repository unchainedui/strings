import charMap from './charmap';

const rxRemoveHash = /^#/;
const rxRemoveQuotes = /(^['"])|(['"]$)/g;
const rxAstralRange = /&nbsp;|\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]?|[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g;

export function length(str) {
  const match = str.match(rxAstralRange);
  return (match === null) ? 0 : match.length;
}

export function substring(str, begin, end) {
  return str.match(rxAstralRange).slice(begin, end).join('')
}

export function removeHash(str) {
  return str.trim().replace(rxRemoveHash, '');
}

export function removeQuotes(str) {
  return str.replace(rxRemoveQuotes, '');
}

export function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (matches, letter) => letter.toUpperCase());
}

export function pluralize(single, plural, opts = {}) {
  return number => {
    if (opts.zeroIsEmpty && !number) {
      return '';
    }

    if (number === 1) {
      return number + ' ' + single;
    }

    return (number || 0) + ' ' + plural;
  }
}

export function slugify(str) {
  return str
    .toLowerCase()
    .split('')
    .map(char => charMap[char] || char)
    .join('')
    .replace(' ', '-')
    .replace(/[^-a-z0-9]{1,60}/, '');
}
