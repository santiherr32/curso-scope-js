function moneyBox() {
	let savedCoins = 0;

	function countCoins(coins) {
		savedCoins += coins;
		console.log(`Moneybox: $${savedCoins}`);
	}
	return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
