const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.length > 0);
      const fields = lines.map((line) => line.split(','));
      const students = fields.length - 1;
      let csStudents = 0;
      const csStudentsList = [];
      let sweStudents = 0;
      const sweStudentsList = [];

      for (const student of fields) {
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
      resolve();
    });
  });
}

module.exports = countStudents;
