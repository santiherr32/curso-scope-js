var a;
var b = "hello";

b = "bye";
var a = "ciao";

function testGlobalScope() {
	console.log(b);
}

function countries() {
	country = "Canada";
	console.log(country);
}

countries();
console.log(country);
