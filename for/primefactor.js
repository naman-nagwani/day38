const number4 = 50

let isAPrime = 0;

for (i = 2; i <= number4; i++) {
    if (number4 % i == 0) {
        isAPrime = 1;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                isAPrime = 0;
            }
        }
        if (isAPrime == 1) {
            console.log(i);
        }
    }
}