async function test(){
	let t = console.time('p');
	let response = await fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2017-18/en.1.json');
	console.timeEnd('p');
	console.time('p2');
	let json = await response.json();
	console.timeEnd('p2');
	console.log(json);
}
test();
console.log('log after starting test');