const request = require('request');
const key = "caa88eed7a5ab2702ce2ec4ff4794a42";
const url = `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=key`;
request({ url : url},(error,response)=>{
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