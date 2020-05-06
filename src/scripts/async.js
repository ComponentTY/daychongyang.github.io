function async1() {
  console.log("async1 start");
  // await async2();
  // console.log("async1 end");
  // 转换
  const p = async2();
  return new Promise((resolve) => {
    Promise.resolve().then(() => {
      p.then(resolve);
    });
  }).then(() => {
    console.log("async1 end");
  });
}

function async2() {
  console.log("async2");
  return Promise.resolve();
}

async1();

new Promise((resolve) => {
  console.log(1);
  resolve();
})
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(4);
  });
