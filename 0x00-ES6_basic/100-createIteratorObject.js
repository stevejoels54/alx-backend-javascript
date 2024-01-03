export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = [];

  for (const department of departments) {
    for (const employee of department) {
      employees.push(employee);
    }
  }

  return employees;
}
