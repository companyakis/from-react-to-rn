fn main() {

    // Fixed length, only same dtypes...

    let ages: [u8; 5] = [35, 9, 45, 12, 70];

    println!("Ages: {:?}", ages);

    println!("Last age: {}", ages[ages.len() - 1])
}

// Ages: [35, 9, 45, 12, 70]
// Last age: 70

