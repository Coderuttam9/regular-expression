const pattren =
  /^[a-z0-9\.]{5,12}[!@#$%^&*()]{2,8}[a-z]{2,5}[\.]{1}[a-z]{3,10}/;

const userName = "haq.4343!!yeaho.com";
console.log(pattren.test(userName));
