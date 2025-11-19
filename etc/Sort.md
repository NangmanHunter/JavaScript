## 한글정렬
```js
const arr = ['apple', 'Banana', 'orange', 'Apple', 'aPple'];

arr.sort();
arr.sort((a, b) => a.localeCompare(b, 'ko'));
console.log(arr);
```