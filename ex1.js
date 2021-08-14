function calcMoney(liste, price) {
	let counter = 0;
	liste.forEach((item) => {
		if (price >= item) {
			price = price % item;
			counter++;
		}
	});
	console.log("price", price);
	if (price === 0) {
		return counter;
	} else return -1;
}

// let T = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
// let M = 626.5;

let T = [500, 200, 100, 50, 20, 10, 5];
let M = 315;
console.log(calcMoney(T, M));
