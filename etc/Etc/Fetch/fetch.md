
```js
let data=fetch("test.txt");
data=data.text();
console.log(data);
```
ㄴ오류남.
ㄴ.text()
ㄴ여기도비동기->Promise객체로 그냥가버림.->그결과 오류남.
ㄴUncaught TypeError: data.text is not a function

# fetch-then
```js
fetch("test.txt")
    .then(response => response.text())   
    .then(data => {
        console.log(data);                
    })
```
```js
fetch("test.txt")
    .then(response => response.text())   
    .then(data => {
        console.log(data);                
    })
    .catch(error => console.log(error));  
```
ㄴES6(ECMAScript 2015)

fetch-then
ㄴfetch-then-then
ㄴfetch-then-then-catch
ㄴfetch-then_then






# fetch-async
```js
async function fetchData() {
    let response = await fetch("test.txt");  // 응답을 받는다
    let data = await response.text();        // 텍스트로 변환
    console.log(data);                        // 읽어온 데이터 출력
}

fetchData();  // 함수 호출
```
ㄴES8(ECMAScript 2017)


fetch-async
ㄴfetch-async-await
ㄴfetch-async-await-fetch
ㄴasync-await-fetch
