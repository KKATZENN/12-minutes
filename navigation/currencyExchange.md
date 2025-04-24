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
color: #d4cecd;
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

</style>



<label>Convert From
    <select id="Convert from">

<option>USD</option>
    <option>EUR</option>
    <option>CAD</option>
    <option>CNY</option>
    <option>ZAR</option>

</select>
</label>

<label>Convert To
    <select id="Convert to">

    <option>USD</option>
    <option>EUR</option>
    <option>CAD</option>
    <option>CNY</option>
    <option>ZAR</option>

</select>
</label>

<button onclick="conversion()"> Convert Currencies</button>

<button onclick="colormode()"> Dark Mode </button>

<script>


async function conversion() {


await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kbReXEndi2qtPBsupWuLTRPhWR2zFbY1tXW9jXXL&currencies=EUR%2CUSD%2CCAD%2CCNY%2CZAR`)  
}





</script>