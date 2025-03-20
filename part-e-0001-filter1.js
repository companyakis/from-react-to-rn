const peopleAges = [14, 21, 32, 12, 48, 25, 19, 97]

const adultAges = peopleAges.filter(age => age > 18)

console.log(adultAges) // [ 21, 32, 48, 25, 19, 97 ]
