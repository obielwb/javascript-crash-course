function ageInDays() {
    var birthYear = prompt("What year are you born?");
    var age = (2021 - birthYear) * 365;

    var h2 = document.createElement("h2");
    var textAnswer = document.createTextNode(`You are ${age} days old.`);

    h2.setAttribute("id", "ageInDays");
    h2.appendChild(textAnswer);
    document.getElementById("result").appendChild(h2);
}

function reset() {
    document.getElementById("result").innerHTML = " ";
}