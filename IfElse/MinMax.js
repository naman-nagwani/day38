function maximum (a,b,c) {
    if (a>b&&a>c) {
        return a;
    } else if (b>a&&b>c) {
        return b;
    } else {
        return c;
    }
}

function minimum (a,b,c) {
    if (a<b&&a<c) {
        return a;
    } else if (b<a&&b<c) {
        return b;
    } else {
        return c;
    }
}

console.log(minimum(954,100,786));
console.log(maximum(954,100,786));