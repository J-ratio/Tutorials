pub fn run() {

    println!("This is a string");

    println!("{} {} {}", "a", "b", "c");

    println!("{0} {0} {1}", "a", "b");

    println!("{A} {B} {C}", A = "a", B = "b", C = "c");

    println!("Binary:{:b}, Hex:{:x}, Octal:{:o}", 11, 11, 11);

    println!("Array: {:?}", (1,2,3,4));
}