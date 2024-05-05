let i = 10
while (i < 5) {
    alert(i)
    i++;
}

let sum = 0;

while (true) {
    let value = +prompt("Enter a number", "");

    if (!value) break;

    sum += value;
}
alert('Sum: ' + sum);

for (let i = 0; i < 3; i++) {
    if (i % 2 === 0)continue;

    alert(i);
}

outer: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 8; j++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        if(!input) break outer;
    }
}

alert('Done!');

for (let a = 2; a <= 10; a++) {
    if (i % 2 === 0) {
        alert(a);
    }
}
let num;
    do {
        num = prompt("Enter with a number", 0)
} while (num <= 100 && num);
