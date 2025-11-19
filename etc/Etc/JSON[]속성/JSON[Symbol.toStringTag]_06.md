`JSON.hasOwnProperty(Symbol.toStringTag)`가 `true`로 나오는 이유는  
**ECMAScript 사양이 업데이트되면서 `JSON` 객체가 `Symbol.toStringTag`를 "자신의 속성"으로 가지게 되었기 때문이야.**  

---

### 🔍 `JSON[Symbol.toStringTag]`의 동작 원리
```javascript
console.log(JSON[Symbol.toStringTag]);  
// 👉 "JSON"

console.log(JSON.hasOwnProperty(Symbol.toStringTag));  
// 👉 true
```
✔ 즉, 이제 `Symbol.toStringTag`가 `JSON` 객체의 **자체 프로퍼티**로 존재하는 거야.  
✔ 예전에는 `Object.prototype.toString()`을 통해서만 영향을 주는 속성이었는데,  
✔ **최근 자바스크립트 사양에서는 `JSON` 자체에 `Symbol.toStringTag` 속성이 추가된 것!**  

---

### 🔹 다른 내장 객체와 비교
```javascript
console.log(Math[Symbol.toStringTag]);  
// 👉 "Math"
console.log(Math.hasOwnProperty(Symbol.toStringTag));  
// 👉 true
```
✔ `Math`도 같은 방식으로 `Symbol.toStringTag`를 직접 속성으로 가지고 있어.

---

### 🎯 결론
✔ `JSON[Symbol.toStringTag]`는 JSON 객체의 속성(property)이라고 할 수 있음.  
✔ `hasOwnProperty(Symbol.toStringTag)`가 `true`를 반환하는 것은 최신 ECMAScript 사양에 따른 것.  
✔ **즉, JSON 객체가 `Symbol.toStringTag`를 자체적으로 가지고 있는 게 맞음!** 🚀