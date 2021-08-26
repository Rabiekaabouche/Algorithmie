function calc(liste, price) {
	let counter = 0;
	liste.forEach((item) => {
		if (price >= item) {
			if (item < 1 && price > 0) {
				price = Number.isInteger(price)
					? price
					: parseInt((price + "").split(".")[1]);
				item = parseInt((item + "").split(".")[1]);
			}
			counter += Math.trunc(price / item);
			price = parseFloat((price % item).toFixed(2));
		}
	});
	if (price === 0) {
		return counter;
	} else return -1;
}
let T = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
// let T = [500, 200, 100, 50, 20, 10, 5];
let M = 1670.08;
// let M = 626.5;
// let M = 1500;
console.log(calc(T, M));
