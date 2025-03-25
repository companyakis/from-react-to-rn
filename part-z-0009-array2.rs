fn main() {

    // Fixed length, only same dtypes...

    let mut ages: [u8; 5] = [35, 9, 45, 12, 70];

    ages[1] = 10;

    println!("Ages: {:?}", ages);
}

// Ages: [35, 10, 45, 12, 70]

