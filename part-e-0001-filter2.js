const people = [
    {name: "Ayhan", married: true},
    {name: "Aygün", married: false},
    {name: "Aysel", married: false},
    {name: "Aykan", married: true},
    {name: "Aykız", married: false},
    {name: "Aydoğan", married: true},
]

const marriedPeople = people.filter(person => person.married === true)

console.log(marriedPeople)


// [
//     { name: 'Ayhan', married: true }, 
//     { name: 'Aykan', married: true }, 
//     { name: 'Aydoğan', married: true }
// ]
