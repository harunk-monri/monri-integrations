const crypto = require('crypto');

const key = "key-8edd04c2ffccf82280fa36a65d999c49";
const orderNumber = Math.floor(Math.random() * 900) + 10000;
const amount = Math.floor(Math.random() * 900) + 100;
const currency = 'BAM';


const dataToHash = `${key}${orderNumber}${amount}${currency}`;
const digest = crypto.createHash('sha512').update(dataToHash).digest('hex');

console.log("Amount:", amount);
console.log("Digest:", digest);
console.log("Order number:", orderNumber);
