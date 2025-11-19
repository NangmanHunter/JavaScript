
```js
async function loadWasm() {
  const response = await fetch("wasm_demo.wasm");
  const bytes = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);

  console.log(instance.exports.add(2, 3)); // 출력: 5
}

loadWasm();
```
```js
<script type="module">
  const response = await fetch("wasm_demo.wasm");
  const bytes = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(bytes);

  console.log(instance.exports.add(2, 3)); // 출력: 5
</script>
```