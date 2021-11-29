let person = {
    name: "Dennis",
    age: 29,
    sagNameAlter: function () {
        alert(`Hallo mein Name ist ${person.name} und ich bin ${person.age} alt`)
    },

}
console.log(person.age + " " + person.name)

person.sagNameAlter()