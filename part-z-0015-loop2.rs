fn main() {

    let mut i: u8 = 0;

    while i < 10 {

        i += 1;

        if i == 5 {
            continue;
        }

        if i == 8 {
            break;
        }

        println!("Number: {i}");
    }
}

// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 6
// Number: 7



