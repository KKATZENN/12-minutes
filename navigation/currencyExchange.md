---
layout: base
title: Currency Exchanger
permalink: /api/CurrencyExchange
---

<style>

body {
transition: background-color 0.3s, color 0.3s;
}
button.lightmode {
color:rgb(124, 118, 117);
border: 2px inset;
border-radius: 5px;
}
button.darkmode {
color: #000036;
border: 2px inset;
border-radius: 5px;
}
body.lightmode {
color: #ffffff;
background-color: #ffffff;
}
body.darkmode {
color: #1c1c1c;
background-color: #1c1c1c;
}
select.lightmode {
color:rgb(124, 118, 117);
border: 2px inset;
border-radius: 5px;
}
select.darkmode {
color: #000036;
border: 2px inset;
border-radius: 5px;
}
input.lightmode {
color:rgb(124, 118, 117);
border: 2px inset;
border-radius: 5px;
}
input.darkmode {
color: #000036;
border: 2px inset;
border-radius: 5px;
}
</style>

<body>

<h1>USD Currency Exchanger</h1>

<input id="amount" type="number" placeholder="Amount">

<h3>Convert To</h3>
<select id="Convert to">
    <option>USD</option>
    <option>EUR</option>
    <option>CAD</option>
    <option>CNY</option>
    <option>ZAR</option>
</select>


<button onclick="conversion()"> Convert Currencies</button>
<div id="result">Test</div>
<button onclick="colormode()"> Light Mode </button>

<script>


async function conversion() {
    const amount = document.getElementById("amount").value;
    const convertTo = document.getElementById("Convert to").value;
    const converter = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kbReXEndi2qtPBsupWuLTRPhWR2zFbY1tXW9jXXL&currencies=EUR%2CUSD%2CCAD%2CCNY%2CZAR`) || await fetch(`fca_live_kbReXEndi2qtPBsupWuLTRPhWR2zFbY1tXW9jXXLvv`); 
    const converting = await res.json();
    const rate = data.data[toCurrency];
    const result = amount * rate;

    if(amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount.";
        return;
    }

    const alert = document.getElementById("result").innerText = `${amount} USD = ${converted.toFixed(2)} ${toCurrency}`;
    alert(alert);
}

function colormode() {
    const body = document.body;
    const button = document.getElementById("themeToggle");
    const savedmode = localStorage.getItem("theme");
    body.classList = savedmode;
    button.classlist = savedmode;

if (body.classList.contains("lightmode")) {
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
    button.classList.remove("lightmode");
    button.classList.add("darkmode");
    button.innerText = "Light Mode";
    localStorage.setItem("theme", "darkmode");
    } else {
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
    button.classList.remove("darkmode");
    button.classList.add("lightmode");
    button.innerText = "Dark Mode";
    localStorage.setItem("theme", "lightmode");
    }

}



</script>

</body>