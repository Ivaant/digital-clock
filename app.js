const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timer = setInterval(() => {
    const fullDate = new Date();
    const formatter = (number) => {
        if (number / 10 < 1) {
            return ("0" + number);
        } else {
            return number;
        }
    }

    hours.textContent = formatter(fullDate.getHours()) + ":";
    minutes.textContent = formatter(fullDate.getMinutes()) + ":";
    seconds.textContent = formatter(fullDate.getSeconds());
}, 500);