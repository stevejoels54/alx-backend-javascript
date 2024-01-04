export default class HolbertonCourse {
  constructor(size, students) {
    this._maxStudentsSize = size;
    this._students = students;
  }

  valueOf() {
    return this._maxStudentsSize;
  }

  toString() {
    return this._students;
  }
}
