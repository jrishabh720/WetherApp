const request = require('request');
const key = "caa88eed7a5ab2702ce2ec4ff4794a42";
const inCel = (temp) => (temp-273).toFixed(2);
const url = `https://api.darksky.net/forecast/${"62d12f8cdd6b6f6868227ed367fe1038"}/${29.953392},${76.811541}?units=si`;
request({ url : url , json : true},function(error,response){
	console.log("It is currently " + response.body.currently.temperature + " degree out. There is a " + response.body.currently.precipProbability + "% chances of rain." );
})