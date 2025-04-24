---
layout: base
title: Currency Exchanger
permalink: /api/CurrencyExchange
---

<style>

button {
color:
}

</style>

<select id="from">

</select>


<button onclick="conversion()"> Convert Currencies</button>

<button onclick="colormode()"> Dark Mode </button>

<script>


async function conversion() {


await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kbReXEndi2qtPBsupWuLTRPhWR2zFbY1tXW9jXXL&currencies=EUR%2CUSD%2CCAD%2CCNY%2CZAR`)  
}





</script>