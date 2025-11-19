
const obj = {
  1: "one",
  2: "two"
};

console.log(obj[1]);   // "one"
console.log(obj["1"]); // "one" (문자열 키로 접근 가능)
console.log(obj.1);    // ❌ 오류 발생


#
const obj = { a: 1, b: 2, c: 3 };

const firstKey = Object.keys(obj)[0];  // "a"
console.log(obj[firstKey]); // 1