const delay = (s) => new Promise((res) => setTimeout(res, s * 1000));
delay(2).then(() => console.log("2 seconds delay"));
