let user = {}
user.name = "John";
user.surName = "Smith";
user.name = "Pete";

delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 1850,
    Ann: 160,
    Pete: 130
};
sum = 0;

    for (let key in salaries) {
        sum+= salaries[key];
    }
alert(sum);

let menu = {
    width: 225,
    height: 315,
    title: 155
}
for (let key in menu) {
    if (typeof m)
}