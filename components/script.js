document.addEventListener('DOMContentLoaded', function () {
    const authenticity_token = "c81a1ac53bf3b7e553583a7cd2f542f92ad50671";
    const client_secret = "957766c5c1c9f706cb6b408fd8a0787f760f70f8";

    let monri = window.Monri(authenticity_token, {locale: "hr"});
    let components = monri.components({clientSecret: client_secret});

    let card = components.create("card", {
        style: {
            base: {
                fontFamily: 'SourceSansPro'
            }, invalid: {
                color: '#ff7a69',
            }, complete: {
                color: '#575757',
            }, input: {
                base: {
                    fontSize: '16px',
                    color: "#8132A7FF",
                    backgroundColor: "#fbfbfb",
                    borderRadius: "6px",
                    border: "none"
                }
            }, rememberCardLabel: {
                base: {
                    fontSize: '11px', color: "#575757",
                }
            }, background: {
                backgroundColor: '#FFFFFF'
            }
        }
    });

    card.mount("card-element");

    const form = document.getElementById('payment-form');
    form?.addEventListener('submit', function (event) {
        event.preventDefault();
        monri.confirmPayment(card, {
            address: "Adresa",
            fullName: "Harun Kološ",
            city: "Sarajevo",
            zip: "71000",
            phone: "+38761222333",
            country: "BIH",
            email: "components-integration-test@monri.com",
            orderInfo: "Components Integration Demo",
            language: 'en'
        }).then(function (result) {
            if (result.error) {
                console.error(result.error);
            } else if (result.result.status === "approved") {
                alert(result.result.status);
                console.log(result.result);
            } else {
                console.error(result);
            }
        }).catch(function (err) {
            console.log('Global error:', err);
        });
    });
});
