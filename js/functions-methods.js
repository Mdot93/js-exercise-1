var text='The sum is ';
function addIt(numA,numB){
	var total =  text + numA +numB;
	console.log(text+total);
}
function multiply(numA,numB){
	var total = numA * numB;
	return total;
	console.log ("this is never going to happen");
}
console.log(multiply(29,4));
//addIt(8,8);
//addIt(10,10);
var myClass= "We lit !";
var Martin = {
 arms:2,
 bigHead:true,
 hairColor:'Black',
slogan:function(what) {
	console.log (what + ' is dope');
	}
}
Martin.slogan("We Lit");
Martin.hairColor = 'black';
console.log (martin.hairColor);
console.log(myClass);