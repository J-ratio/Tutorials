/*
Primitive Types--
Integers: u8, i8, u16, i16, u32, i32, u64, i64, u128, i128 (number of bits they take in memory)
Floats: f32, f64
Boolean (bool)
Characters (char)
Tuples
Arrays
*/


pub fn run() {
    
    let a = 1;
    let b = 2.5;
    let c: i64 = 433456435323;
    let d = 5 < 4;
    let e = '1';
    let f = '\u{1f000}';

    println!("{:?}", (a,b,c,d,e,f));
}