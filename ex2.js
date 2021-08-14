const decToBin = (dec) => {
	let bin = "";
	let f = false;

	while (!f) {
		bin = bin + (dec % 2);
		dec = Math.trunc(dec / 2);

		if (dec === 0) f = true;
	}

	return bin.split("").reverse();
};

const occurence = (dec) => {
	let binary = decToBin(dec);
	let counter = 0,
		resultCounter = 0;

	for (let i = 0; i < binary.length; i++) {
		if (binary[i] !== "0") {
			counter = 0;
		} else {
			counter++;
			if (counter > resultCounter) resultCounter = counter;
		}
	}
	return resultCounter;
};

var dec = 1246;
console.log(occurence(dec));
