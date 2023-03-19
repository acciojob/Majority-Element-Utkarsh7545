function majorityelement(arr) {
	let a=floor(arr.length/2);
	for (let i = 0; i < arr.length; i++) {
		let count=1;
		for (let j = i+1; j < arr.length; j++) {
			if(arr[i]==arr[j]){
				count++;
			}
		}
		if(count>=a){
			return arr[i];
		}
	}
	return 0;
}
const readline = require("readline");

const input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (cmd) {
  input.push(cmd);
});

rl.on("close", function (cmd) {
  Main(input);
});

function Main(input) {
  const arr = JSON.parse(input[0]).map((e) => parseInt(e, 10));
  console.log(majorityelement(arr));
}