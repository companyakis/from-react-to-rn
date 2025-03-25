fn main() {

    let mut emp_data: (&str, u8, u32) = ("Mustafa", 121, 99_500);

    emp_data.0 = "Mustafa Büyükdereli";

    println!("{:?}", emp_data.0);

}

