const request = require('request');

const url = `https://api.darksky.net/forecast/62d12f8cdd6b6f6868227ed367fe1038/37.8267,-122.4233`;

request({url : url},(error,response)=>{
	console.log(response);
})

//console.log("Starting");

//setTimeout(()=>{
//	console.log("0 Sec Later");
//},2000)

//setTimeout(()=>{
//      console.log("2 Sec Later");
//},1998)

//console.log("Stopping");