localStorage.setItem("myName", "Mustafa")

localStorage.setItem("year", 2025)

// update

localStorage.myName = "Mustafa Buyukdereli"

let whoIam = localStorage.getItem("myName")

console.log(whoIam)

// remove

localStorage.removeItem("myName")
