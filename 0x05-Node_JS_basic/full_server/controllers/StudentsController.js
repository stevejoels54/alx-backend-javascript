import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let output = 'This is the list of our students\n';
        for (const key in studentsByField) {
          if (Object.hasOwnProperty.call(studentsByField, key)) {
            if (key !== Object.keys(studentsByField)[Object.keys(studentsByField).length - 1]) {
              output += `Number of students in ${key}: ${studentsByField[key].length}. List: ${studentsByField[key].join(', ')}\n`;
            } else {
              output += `Number of students in ${key}: ${studentsByField[key].length}. List: ${studentsByField[key].join(', ')}`;
            }
          }
        }
      return res.status(200).send(output);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const studentsByField = await readDatabase('database.csv');
      const { major } = req.params;

      if (studentsByField[major]) {
        res.status(200).send(`List: ${studentsByField[major].join(', ')}`);
      } else {
         res.status(500).send('Major parameter must be CS or SWE');
      }
    } catch (error) {
        res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
