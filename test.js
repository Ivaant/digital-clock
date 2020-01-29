const formatter = (number) => {
    if (number / 10 < 1) {
        return ("0" + number);
    } else {
        return number;
    }
}

console.log(formatter(5));