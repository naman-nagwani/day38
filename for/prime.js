//Prime number
const number2 = 5
let isPrime = true

if (number2 == 1) {
    console.log("1 is neither prime nor a composite number ")
}

for (i = 2; i <= number2 / 2; i++) {
    if (number2 % i == 0) {
        isPrime = false
    }
}
if (isPrime) {
    console.log("It's a prime number")
}
else {
    console.log("It's not a prime number")
}