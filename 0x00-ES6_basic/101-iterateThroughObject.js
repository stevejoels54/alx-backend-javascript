export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [i, item] of reportWithIterator.entries()) {
    if (i !== reportWithIterator.length - 1) {
      result += `${item} | `;
    } else {
      result += `${item}`;
    }
  }

  return result;
}
