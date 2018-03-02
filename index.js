var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Bryan" + i,
            email: i == 5 ? "i" + i + "gmail" : "i" + i + "@gmail.com",
            salary: (i + 1000),
            active: i % 2 == 0 ? true : false
        };
        people.push(newPerson);
    }
}
function validatePeople() {
    var patern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    people.forEach(function (element) {
        if (patern.test(element.email) && element.active)
            console.log("correo: " + element.email + " estado: " + element.active);
    });
}
createPeople();
validatePeople();
