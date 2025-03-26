fn main() {

    let result = doubles(12, -32);

    println!("{}", result.0);

    println!("{}", result.1);

}

fn doubles(x: i32, y: i32) -> (i32, i32) {

    (x * 2, y * 2)
}



