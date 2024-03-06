function pattern4(n) {
	for (let i = 1; i <= n; i++) {
		let row = "";
		for (let j = 1; j <= i; j++) {
			row += `${i} `;
		}
		console.log(row);
	}
}

pattern4(5);
