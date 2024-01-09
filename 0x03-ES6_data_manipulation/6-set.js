export default function setFromArray(array) {
  // return new Set(array);
  const set = [];
  array.map((arr) => set.push(arr));

  return set;
}
