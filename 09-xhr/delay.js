const delay = (s) => new Promise((res) => setTimeout(res, s * 1000));
delay(2).then(() => console.log("2 seconds delay"));

new Promise((resolve, reject) => {
  console.dir(resolve);
  resolve("Check what's inside resolve function");
}).then((response) => {
  console.log(response);
});

// the following code print "undefined" first then after 2 seconds it will print "success"
const wrongFunc = () => {
  setTimeout(() => {
    console.log("Success");
  }, 2000);
};
wrongFunc(); // undefined -> 2 seconds delay -> "success"

// the following promise will wait 3 seconds and print "Success"
const rightFunc = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success");
  }, 3000);
});
rightFunc.then((response) => console.log(response));
