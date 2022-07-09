const global = 0;

const myParentFunction = () => {
	const inner1 = 1;
	console.log(global);

	const myChildFunction = () => {
		const inner2 = 2;

		console.log(inner1, global);

		const myGrandChildFunction = () => {
			console.log(inner1, inner2, global);
		};
		return myGrandChildFunction();
	};
	return myChildFunction();
};

myParentFunction();
