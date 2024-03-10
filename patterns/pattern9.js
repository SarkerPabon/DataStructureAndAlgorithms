function pattern7(n) {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < n - i - 1; j++) {
			row += ` `;
		}
		for (let j = 0; j < 2 * i + 1; j++) {
			row += `*`;
		}
		for (let j = 0; j < n - i - 1; j++) {
			row += ` `;
		}
		console.log(row);
	}
}

function pattern8(n) {
	for (let i = 0; i < n; i++) {
		let row = "";
		for (let j = 0; j < i; j++) {
			row += ` `;
		}
		for (let j = 0; j < 2 * n - i * 2 - 1; j++) {
			row += `*`;
		}
		for (let j = 0; j < i; j++) {
			row += ` `;
		}
		console.log(row);
	}
}

function pattern9(n) {
	pattern7(n);
	pattern8(n);
}

pattern9(5);
