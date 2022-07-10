function greeting() {
	let username = "Santiago";

	function displayName() {
		return `Hello ${username}`;
	}
	return displayName;
}

const g = greeting();
console.log(g);
console.log(g());
