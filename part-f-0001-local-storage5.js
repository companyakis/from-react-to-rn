localStorage.setItem("myName", "Mustafa")

localStorage.setItem("year", 2025)

// clear

localStorage.clear()

let whoIam = localStorage.getItem("myName")

let currentYear = localStorage.getItem("year")

console.log(whoIam, currentYear) // null null
