/*
	- Relation/Formulla = n - i + 1
		Here n is given number
		and i is row number / line
*/
function pattern6(n) {
	for (let i = 1; i <= n; i++) {
		let row = "";
		for (let j = 1; j <= n - i + 1; j++) {
			row += `${j} `;
		}
		console.log(row);
	}
}

pattern6(5);
