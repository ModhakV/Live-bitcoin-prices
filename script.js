var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var btcrs = document.getElementById("bitcoinrs");
var ltcrs = document.getElementById("litecoinrs");
var ethrs = document.getElementById("ethereumrs");
var dogers = document.getElementById("dogecoinrs");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    

    "method": "GET",
    "headers": {}
}
var liveprice1 = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=inr",

    "method": "GET",
    "headers": {}
}
$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});

$.ajax(liveprice1).done(function (response){
    btcrs.innerHTML = response.bitcoin.inr;
    ltcrs.innerHTML = response.litecoin.inr;
    ethrs.innerHTML = response.ethereum.inr;
    dogers.innerHTML = response.dogecoin.inr;

});

