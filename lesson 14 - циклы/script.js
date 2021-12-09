// for, while, do while

let num = 50;

while (num < 60) {
    console.log(num);
    num++;
}

let num2 = 50;

do {
    console.log(num2);
    num2++;
}
while (num < 55);

let num3 = 50;

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);

    if (i === 9) {
        break;
    }
}