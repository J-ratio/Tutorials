// Primitive str = Immutable fixed-length string somewhere in memory
// String = Growable, heap-allocated data structure - Use when you need to modify or own string data

pub fn run() {

    let mut s = String::from("A string");

    println!("{} of length {} with capacity {}", s, s.len(), s.capacity());

    s.push(' ');

    s.push_str("of length 8");

    println!("{}", s);

    println!("{}", s.contains('A'));

    for word in s.split_whitespace() {
        println!("{}", word);
    }

    let mut new_s = String::with_capacity(4);

    new_s.push_str("wrgwse");

    println!("{}", new_s);
}