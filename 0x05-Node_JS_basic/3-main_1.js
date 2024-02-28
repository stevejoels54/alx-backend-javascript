const countStudents = require("./3-read_file_async_return");

countStudents("database.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
