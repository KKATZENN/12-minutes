---
layout: base
title: Currency Exchanger
permalink: /api/CurrencyExchange
---

<style>

button {

}

</style>

<select id="Convert from">

<option>USD</option>
<option>EUR</option>
<option>CAD</option>
<option>CNY</option>
<option>ZAR</option>

</select>

<select id="Convert to">

<option>USD</option>
<option>EUR</option>
<option>CAD</option>
<option>CNY</option>
<option>ZAR</option>

</select>


<button onclick="conversion()"> Convert Currencies</button>

<button onclick="colormode()"> Dark Mode </button>

<script>


async function conversion() {


await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kbReXEndi2qtPBsupWuLTRPhWR2zFbY1tXW9jXXL&currencies=EUR%2CUSD%2CCAD%2CCNY%2CZAR`)  
}





</script>