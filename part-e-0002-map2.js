const salesByEmployees = [
  
    {name: "ayhan", sales: 4150},
    {name: "bengü", sales: 3800},
    {name: "hakan", sales: 4400},
    {name: "bilge", sales: 4200},
    {name: "kutluk", sales: 3500},
    {name: "kağan", sales: 4500},
]

// if sales > 4000 => 0.15 premium else 0

const premiums = salesByEmployees.map(
    
    emp => {
        if (emp.sales > 4000) {

            emp.premium = emp.sales * 0.15

            return emp
        }

        else {

            emp.premium = 0

            return emp
        }
    }
)

console.log(premiums)

// [
//     { name: 'ayhan', sales: 4150, premium: 622.5 },
//     { name: 'bengü', sales: 3800, premium: 0 },    
//     { name: 'hakan', sales: 4400, premium: 660 },  
//     { name: 'bilge', sales: 4200, premium: 630 },  
//     { name: 'kutluk', sales: 3500, premium: 0 },   
//     { name: 'kağan', sales: 4500, premium: 675 }   
// ]

