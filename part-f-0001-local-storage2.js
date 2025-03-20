localStorage.setItem("myName", "Mustafa")

localStorage.setItem("year", 2025)

// we can use these values => string values!

let fintechManager = localStorage.getItem("myName")

let previousYear = parseInt(localStorage.getItem("year")) - 1

console.log(`Last year: ${previousYear}`) // Last year: 2024
