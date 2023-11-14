# Monri Integrations Example Demo
## Monri Web integrations Example Demo (Components, Lightbox, Redirect)

### Documentation Components: https://ipgtest.monri.com/en/documentation/components
<img width="1792" alt="image" src="https://github.com/harunk-monri/monri-integrations/assets/111092131/9923f9a7-2911-4f99-afd1-10fbfb03e8c9">



### Documentation Lightbox: https://ipgtest.monri.com/en/documentation/lightbox
The Lightbox approach uses an <iframe> to embed the payment page as an overlay to your online shop.
When the Lightbox Mode is invoked, the merchants online shop is darkened out and the payment page appears as a floating element on top.
<img width="1792" alt="image" src="https://github.com/harunk-monri/monri-integrations/assets/111092131/c5c9df24-2c5f-4584-80b8-daf41ae0b87c">

### Documentation Redirect: https://ipgtest.monri.com/en/documentation/v2_form
WebPay Form is a simple web service; merchant should collect data consisted of buyer’s profile and order info at his site and submit that data to https://ipgtest.monri.com/v2/form using HTTP POST method.
<img width="1792" alt="image" src="https://github.com/harunk-monri/monri-integrations/assets/111092131/a26c145c-4d0c-479f-859e-7db056924b47">

### Installation ⚙️
Just clone the repo, install the packages with Node Packages Manager:
```git
$ git clone git@github.com:harunk-monri/monri-integrations.git
$ cd monri-integrations          # Change current directory to the newly created one
```
### Monri Components
```git
$ cd components
$ node components.js          # Copy the client_secret and paste it inside script.js
```
```java
Response Status: 200
Result: {
  status: 'approved',
  id: 'e38bfa8dac335df91091a33b3e942f580a26ee0d',
  client_secret: 'e38bfa8dac335df91091a33b3e942f580a26ee0d'
}
```
Replace the generated ```client_secret``` value with the existing one inside ```script.js```
```java
const client_secret = "e38bfa8dac335df91091a33b3e942f580a26ee0d";
```
Then run ```../components/index.html``` and you will see Monri Components Integration🎉

### Monri Lighbox
```git
$ cd lightbox
$ node lightbox.js          # Copy the amount,order_number,digest and paste it inside script.js
```
```java
Amount: 550
Digest: fd933f9e45b4425c69609460c4a4cf35f36c78e26155f8cdd4ef3225dabc97fce97f35e70dd9a0f651e59ed39a9761982ed5fea5beb1f843dca9c17b930da6ea
Order number: 10405
```

Replace the generated ```data-amount```, ```data-order_number```, ```data-digest``` value with the existing one inside ```../lightbox/index.html```
```java
data-amount="550"
data-order-number="10405"
data-digest="fd933f9e45b4425c69609460c4a4cf35f36c78e26155f8cdd4ef3225dabc97fce97f35e70dd9a0f651e59ed39a9761982ed5fea5beb1f843dca9c17b930da6ea"
```
Then run ```../lightbox/index.html``` and you will see Monri Lightbox Integration🎉

### Monri Redirect
```git
$ cd redirect
```
Then run ```../redirect/index.html``` and you will see Monri Redirect Integration🎉

© 2023 Monri Payments




