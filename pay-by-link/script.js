const crypto = require('crypto');
const axios = require('axios');


const generateRandomOrderNumber = () => {
    return 'order-' + Math.random().toString(36).substring(2, 15);
};


const merchant_key = '{{SET_YOUR_MERCHANT_KEY}}';
const authenticity_token = '{{SET_YOUR_AUTHENTICITY_TOKEN}}';
const timestamp = Date.now().toString();
const uri = '/v2/terminal-entry/create-or-update';


const requestPayload = {
    "transaction_type": "purchase",
    "amount": 2130,
    "currency": "EUR",
    "number_of_installments": "",
    "order_number": generateRandomOrderNumber(),
    "order_info": "Order info",
    "language": "hr",
    "ch_full_name": "Harun Kološ",
    "ch_address": "Džemala Bijedića 2",
    "ch_city": "Sarajevo",
    "ch_zip": "71000",
    "ch_country": "BA",
    "ch_phone": "+387 61 222 333",
    "ch_email": "test-pay-by-link@monri.com",
    "comment": "",
    "moto": true,
    "tokenize_pan_offered": true,
    "supported_payment_methods": ["{{SET_YOUR_PAN_TOKEN}}", "card"]
};


const digestInput = `${merchant_key}${timestamp}${authenticity_token}${uri}${JSON.stringify(requestPayload)}`;


const digest = crypto.createHash('sha512').update(digestInput).digest('hex');

console.log('order_number:', requestPayload.order_number);
console.log('digest_value:', digest);


const url = 'https://ipgtest.monri.com/v2/terminal-entry/create-or-update';
const headers = {
    'Authorization': `WP3-v2.1 ${authenticity_token} ${timestamp} ${digest}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cookie': 'HttpOnly; __cfduid=d24149e2b228bfaf83d9df35753a06ba81597830913'
};


axios.post(url, requestPayload, {headers})
    .then(response => {
        console.log('Success:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
