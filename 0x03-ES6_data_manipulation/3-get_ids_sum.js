import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  let sum = 0;
  const ids = getListStudentIds(students);
  if (ids.length === 0) {
    return sum;
  }
  sum = ids.reduce((a, b) => a + b);
  return sum;
}
