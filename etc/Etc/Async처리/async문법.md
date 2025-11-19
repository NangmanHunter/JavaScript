```javascript
async function run() {

    load();

    await new Promise(resolve => setTimeout(resolve, 100)); 
    js();
}
run(); 
```