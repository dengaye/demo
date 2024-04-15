const ajax = async (hasError = false, msg = 'ajax error') => {
  return new Promise((resolve, reject) => {
    if (hasError) {
      reject(msg)
    } else {
      setTimeout(() => {
        resolve()
      }, 1000)
    }
  })
}

async function fetchData() {
  try {
    await ajax();
    console.log('[start]');
    const getInfo = async (index) => {
      const hasError = index === 2;
      await ajax(hasError, `error ${index}`);
      console.log("[SUCCESS]: ", index || '');
    }
    // for (let i = 0; i < 4; i++) {
    //   try {
    //     await getInfo(i)
    //   } catch (err) {
    //     console.log("[ERROR]: ", err)
    //   }
    // }

    await Promise.all([1, 2, 4].map(async (index) => {
      try {
        await getInfo(index)
      } catch(err) {
        console.log("[ERROR]: ", err)
      }
    }))

    console.log('[end]')
  } catch (error) {
    console.log("has error", error)
  }
}

fetchData();
