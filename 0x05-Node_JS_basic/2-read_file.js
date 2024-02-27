const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs
      .readFileSync(path, { encoding: 'utf8' })
      .split('\n')
      .filter((line) => line.length > 0)
      .map((line) => line.split(','))
      .slice(1);
    const students = data.length;
    let csStudents = 0;
    const csStudentsList = [];
    let sweStudents = 0;
    const sweStudentsList = [];

    for (const student of data) {
      if (student[3] === 'CS') {
        csStudents += 1;
        csStudentsList.push(student[0]);
      } else if (student[3] === 'SWE') {
        sweStudents += 1;
        sweStudentsList.push(student[0]);
      }
    }
    console.log(`Number of students: ${students}`);
    console.log(
      `Number of students in CS: ${csStudents}. List: ${csStudentsList
        .toString()
        .split(',')
        .join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${sweStudents}. List: ${sweStudentsList
        .toString()
        .split(',')
        .join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
