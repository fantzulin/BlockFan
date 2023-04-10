let my_name = document.querySelector("button[name='name']");
let hint_name = document.querySelector(".hint-name");
let i = 0;
let speed = 100;
let element 
let text

my_name.addEventListener("click", function(e){
    console.log("click")
    hint_name.classList.add("show");
    element = hint_name.querySelector("p");
    text = "Hi I'm Chris. I'm a Front-end Developer.";
    type_effect()
})

function type_effect() {
    if (i < text.length) {
        console.log("i:", i);
        console.log("text:", text);
        element.innerHTML += text.charAt(i);
        i++;
        console.log("i++:", i);
        console.log("text.charAt:", text.charAt(i));
        setTimeout(type_effect, speed);
    }
}

function next_step(this_div, next_div) {
    let hidden_div = document.querySelector(`.${this_div}`);
    let show_div = document.querySelector(`.${next_div}`);
    hidden_div.style.display = "none";
    show_div.style.display = "block";
    i = 0;
    element = "";
    text = "";
}

function show_div(div) {
    let show_div_element = document.querySelector(`.${div}`);
    show_div_element.style.display = "block";
    element = show_div_element.querySelector("p");
    text = "These are the project I've worked.";
    type_effect()
}

let btn_cryptos = document.querySelectorAll("button[name='crypto']");
let crypto = "";
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};
let sentence = document.querySelector("p.sentence");
let hint_crypto= document.querySelector(".hint-crypto");

for(let btn_crypto of btn_cryptos) {
    btn_crypto.addEventListener("click", function(e){
        let btn_value = e.target.getAttribute("data-crypto");
        crypto = btn_value;
        let get_price = function () {
            fetch(`https://api.coincap.io/v2/assets/${crypto}`, requestOptions)
            .then(function(response) {
                return response.text()
            })
            .then(function(result){
                let json = JSON.parse(result);
                console.log(json.data.symbol);
                console.log(json.data.priceUsd);
                let symbol = json.data.symbol;
                let price = Math.trunc(json.data.priceUsd)
                let crypto_txt = `${symbol} current price is ${price} USD.`;
                sentence.innerHTML = crypto_txt;
                hint_crypto.classList.add("show");
            })
            .catch(error => console.log('error', error));
        }
        get_price()
    })
}

