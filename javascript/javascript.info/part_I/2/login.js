let userName = prompt("Who is you", "")

if (userName === "Admin") {
    let userPass = prompt("Write your password", "")
        if (userPass === "master") {
            alert("Welcome")
        }else if (userPass === "" || userPass === null) {
            alert("Canceled")
        } else alert("Your password is wrong")
}else if (userName === "" || userName === null) {
    alert("Canceled")
}else alert("I don't know you")
