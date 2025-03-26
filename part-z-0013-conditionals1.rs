fn main() {

    let employee_elon_musk_premium = premium_returner(6500 as f32);

    println!("Elon premium: ${employee_elon_musk_premium}") // Elon premium: $520

}

fn premium_returner(sales_amount_usd: f32) -> f32 {

    if sales_amount_usd > 10000 as f32 {
        sales_amount_usd * 0.12
    } else if sales_amount_usd > 5000.0 && sales_amount_usd < 10000.0 {
        sales_amount_usd * 0.08
    } else {
        0.0
    }
}



