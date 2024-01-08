import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  let cityStudents = [];

  cityStudents = getStudentsByLocation(students, city);

  return cityStudents.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    const grade = studentGrade.length > 0 ? studentGrade[0].grade : 'N/A';
    return { ...student, grade };
  });
}
