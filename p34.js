var FACTORIAL = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];

function factorialDigitSum(x) {
		var sum = 0;
		while (x != 0) {
			sum += FACTORIAL[x % 10];
			x /= 10;
			x=Math.floor(x);
		}
		return sum;
}

function facSum(n) {
		var sum=0;
		for(var i=3;i<10000000;i++){
			if (i == factorialDigitSum(i))
				sum += i;
		}
		return sum;
}

console.log(facSum());