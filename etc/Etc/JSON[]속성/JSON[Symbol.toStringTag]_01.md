`JSON` 클래스의 **Static properties(정적 속성)** 은 존재하지 않고, 대신 **Static methods(정적 메서드)** 만 있어.  

✅ **JSON은 정적 메서드만 제공하는 유틸리티 객체**  
즉, `JSON.parse()`나 `JSON.stringify()` 같은 메서드는 인스턴스를 만들지 않고 바로 사용 가능해.  

---

### ✅ `JSON`의 주요 Static methods 예제  
#### 1️⃣ `JSON.parse()` → JSON 문자열을 객체로 변환  
```javascript
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // "Alice"
console.log(obj.age);  // 25
```
> 📌 JSON 문자열을 자바스크립트 객체로 변환

---

#### 2️⃣ `JSON.stringify()` → 객체를 JSON 문자열로 변환  
```javascript
const person = { name: "Bob", age: 30 };
const jsonStr = JSON.stringify(person);

console.log(jsonStr); // '{"name":"Bob","age":30}'
```
> 📌 객체를 JSON 형식의 문자열로 변환

---

#### 3️⃣ `JSON.stringify()` + `replacer` 함수  
```javascript
const user = { name: "Charlie", age: 28, password: "secret123" };

// 특정 키 제외
const jsonStr = JSON.stringify(user, (key, value) => {
    if (key === "password") return undefined;
    return value;
});

console.log(jsonStr); // '{"name":"Charlie","age":28}'
```
> 📌 `replacer`를 사용하면 특정 속성을 제외하고 JSON 변환 가능

---

#### 4️⃣ `JSON.stringify()` + `space` 옵션 (가독성 향상)  
```javascript
const data = { name: "David", age: 35 };
console.log(JSON.stringify(data, null, 2));
```
출력:  
```json
{
  "name": "David",
  "age": 35
}
```
> 📌 `space` 매개변수를 사용하면 JSON을 들여쓰기해서 보기 좋게 출력 가능

---

### 🚀 결론  
✔ `JSON` 객체에는 **Static properties(정적 속성)** 은 없고,  
✔ `JSON.parse()`와 `JSON.stringify()` 같은 **Static methods(정적 메서드)** 만 제공돼!