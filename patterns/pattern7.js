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

pattern7(5);

/* function pattern7Another(n) {
	for (let i = 1; i <= n; i++) {
		let row = "";
		for (let j = 1; j <= n - i; j++) {
			row += ` `;
		}
		for (let j = 1; j <= 2 * i - 1; j++) {
			row += `*`;
		}
		for (let j = 1; j <= n - i; j++) {
			row += ` `;
		}
		console.log(row);
	}
}

pattern7Another(5);
 */
