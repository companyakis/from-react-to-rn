fn main() {

    let year: u16 = 2024;

    //year = 2025; // Error => cannot mutate immutable variable `year`

    let mut this_year: u16 = 2024;

    this_year = 2025;
    
}
