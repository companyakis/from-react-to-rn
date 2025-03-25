fn main() {

    let emp_data: (&str, u8, u32) = ("Mustafa", 121, 99_500);

    let (name, id, salary) = emp_data;

    println!("Name: {name}");

    println!("ID: {id}");

    println!("Salary: {salary}");

    println!("-----------------------------------");

    println!("{:?}", emp_data.0);

    println!("{:?}", emp_data.1);

    println!("{:?}", emp_data.2);

}

