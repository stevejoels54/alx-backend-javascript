export default function getStudentsByLocation(students, city) {
  const filteredStudents = [];

  if (!Array.isArray(students)) {
    return [];
  }

  students.filter((student) => (student.location === city ? filteredStudents.push(student) : null));

  return filteredStudents;
}
