import fetch from 'node-fetch';
import {createHash} from 'crypto';

const data = {
    amount: 100,
    order_number: 'random' + Date.now(),
    currency: 'EUR',
    transaction_type: 'purchase',
    order_info: 'Components Integration Demo',
    scenario: 'charge',
};

const bodyAsString = JSON.stringify(data);

const baseUrl = 'https://ipgtest.monri.com';
const apiUrl = `${baseUrl}/v2/payment/new`;

const timestamp = Math.floor(Date.now() / 1000);
const authenticityToken = 'c81a1ac53bf3b7e553583a7cd2f542f92ad50671';
const key = 'key-8edd04c2ffccf82280fa36a65d999c49';

const encoder = new TextEncoder();
const dataToHash = key + timestamp + authenticityToken + bodyAsString;
const buffer = encoder.encode(dataToHash);
const hashBuffer = createHash('sha512').update(buffer).digest();
const digest = Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');

const authorization = `WP3-v2 ${authenticityToken} ${timestamp} ${digest}`;

fetch(apiUrl, {
    method: 'POST', body: bodyAsString, headers: {
        'Content-Type': 'application/json',
        'Content-Length': bodyAsString.length.toString(),
        'Authorization': authorization,
    },
})
    .then(response => {
        console.log('Response Status:', response.status);
        return response.json();
    })
    .then(result => {
        console.log('Result:', result);

        const clientSecret = result.client_secret;
        const status = result.status;

        if (status === 'approved') {
            console.log('Payment approved. Client Secret:', clientSecret);
        } else {
            console.log('Payment declined. Error:', result.error || 'Unknown error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

