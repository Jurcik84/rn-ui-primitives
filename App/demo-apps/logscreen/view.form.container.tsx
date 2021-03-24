const MayBe = function (val) {
  this.value = val;
};

MayBe.of = function (val) {
  return new MayBe(val);
};

MayBe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

// const result = MayBe.of("string").map((x) => x.toUpperCase());

// console.log(result.value);

// const name = MayBe.of("Juraj Hynek")
//   .map((x) => x.toUpperCase())
//   .map((x) => x + " Hello");

// console.log(name.value);

// const data = MayBe.of([1, 2, 3, 4, 5, 6, 7, 8, 9])
//   .map((list) => list.map((item) => item + 10))
//   .map((list) => list.reduce((accum, val) => accum + val, 0))
//   .map((list) => null)
//   .map((list) => (list.length > 20 ? alert(list) : list));

// console.log(data.value);

const someData = MayBe.of([1, 2, 3, 4, 5, 6, 7, 8, 9])
  .map((x) => (x.reduce ? x : null))
  .map((x) => x.reduce((accum, next) => accum + next, 0))
  .map((x) => (typeof x === "number" ? x : null))
  .map((x) => "the sum of all items is  " + x)
  .map((x) => {
    document.getElementById("app").innerHTML = x;
    return x;
  });

console.log(someData.value);

