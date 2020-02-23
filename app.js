const request = require('request');
const key = "caa88eed7a5ab2702ce2ec4ff4794a42";
const inCel = (temp) => (temp-273).toFixed(2);
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${29.953950}&lon=${76.810454}&appid=${key}&lang=${'hi'}`;
request({ url : url , json : true},function(error,response){
	const data = response.body;
//	console.log(data.weather[0].main + "is Todays Status and" + data.main.temp-273 + "is Todays Temperature");
	console.log('Status : ' + data.weather[0].main + ' Temperature : ' + inCel(data.main.temp));
})

//console.log("Starting");

//setTimeout(()=>{
//	console.log("0 Sec Later");
//},2000)

//setTimeout(()=>{
//      console.log("2 Sec Later");
//},1998)

//console.log("Stopping");