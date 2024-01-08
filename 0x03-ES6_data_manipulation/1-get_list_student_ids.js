export default function getListStudentIds(students) {
  const ids = [];

  if (!Array.isArray(students)) {
    return [];
  }
  students.map((students) => ids.push(students.id));

  return ids;
}
