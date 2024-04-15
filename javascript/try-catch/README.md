# try...catch

## 在异步中的运用

### async...await
在函数中有多个 `async...await` 是否需要多个 `try...catch`？

```
async function fetchData() {
  try {
    await ajax();
  } catch (error) {
    console.log("has error", error)
  }
}

fetchData();

```

如果 fetchData 中还有函数，
```
async function fetchData() {
  try {
    await ajax();
    const getInfo = async () => {
      await ajax(true, 'error 1');
      console.log("success"); 
    }
    getInfo()
  } catch (error) {
    console.log("has error", error)
  }
}

fetchData();

```

函数 `getInfo` 中的错误不能在最外层捕获

```
async function fetchData() {
  try {
    await ajax();
    const getInfo = async () => {
      await ajax(true, 'error 1');
    }
    await getInfo()
  } catch (error) {
    console.log("has error", error)
  }
}

// or
async function fetchData() {
  try {
    await ajax();
    const getInfo = async () => {
      try {
        await ajax(true, 'error 1');
        console.log("success"); 
      } catch (error) {
        console.log("error", error)
      }
    }
    sgetInfo()
  } catch (error) {
    console.log("has error", error)
  }
}
```