class Array_Class {
  constructor(MainArr) {
    this.MainArr = MainArr;
  }
}
class containsAll extends Array_Class {
  constructor(MainArr, SubArr) {
    super(MainArr);
    this.SubArr = SubArr;
  }
  contains_all() {
    console.log(this.SubArr.every((element) => this.MainArr.includes(element)));
  }
}
const arr = new containsAll([1, 2, 3], [1, 2, 3]);
const arrr = new containsAll([1, 2], [1, 2, 3]);
arr.contains_all();
arrr.contains_all();
