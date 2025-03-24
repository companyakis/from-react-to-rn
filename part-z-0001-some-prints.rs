fn main() {
    
    let my_name: &str = "Mustafa";

    print!("My name is {my_name}\n");

    println!("My name is {my_name}!");

    let my_last_name = "Büyükdereli";

    let formatted_name = format!("I am {my_name} {my_last_name}");

    println!("{formatted_name}")
}

// My name is Mustafa      
// My name is Mustafa!     
// I am Mustafa Büyükdereli
