

# text
```js
fetch("test.txt")
    .then(response => response.text())   
    .then(data => {
        console.log(data);                
    })
```


# json
```js
fetch("test.json")
    .then(response => response.text())   
    .then(data => {
        data=JSON.parse(data)
        console.log(data);                
    })
```
```js
fetch("test.json")
    .then(response => response.json())   
    .then(data => {
        console.log(data);                
    })
```

# json-array
```js
fetch("test.json")
    .then(response => response.text())   
    .then(data => {
        data=JSON.parse(data)
        console.log(data);                
    })
```
```js
fetch("test.json")
    .then(response => response.json())   
    .then(data => {
        console.log(data);                
    })
```
.json
ㄴ[{}]
ㄴ당해형식도
ㄴ지원.!!!
ㄴjson형식만있으면
ㄴ잡아다처리해줌.
ㄴ굿굿.
.json
ㄴ{}
ㄴ[{}]
