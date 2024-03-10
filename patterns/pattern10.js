function pattern10(n) {
	for (let i = 1; i <= 2 * n - 1; i++) {
		let row = "";

		let star = i;
		if (i > n) {
			star = 2 * n - i;
		}
		for (let j = 1; j <= star; j++) {
			row += "*";
		}
		console.log(row);
	}
}

pattern10(5);
