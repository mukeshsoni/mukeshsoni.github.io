---
title: How to write a command line application in rust
created: '2023-07-31'
slug: '2023-07-31-how-to-write-a-command-line-application-in-rust'
categories:
  - 'rust'
  - 'beginner'
---

<svelte:head>

  <title>How to write a command line application in rust</title>
</svelte:head>

Writing a command line application in rust in not that hard. Mainly because of the library ecosystem for writing CLI apps in rust.

Before we get started, make sure you have `rustc` and `cargo` installed on your machine. If you don't know how to do that, check this [link](/blog/2023-07-31-rust-quick-setup-macos).

---

Let's build a small CLI app which takes 2 numbers as inputs and prints the sum of the numbers. We will not use any library for this one.

Let's create our rust app first -

```bash
cargo new add-machine
cd add-machine
cargo run
```

When we build a `rust` app, it's already a CLI app. The app we created above just prints "Hello, world!". But it's a CLI app nevertheless, i.e. it's an executable which can be run in a shell.

We want to finally call our app like this -

```bash
add-machine 2 3
// prints 5
```

During development we will run the same app with `cargo`

```bash
cargo run 2 3
// prints 5
```

The first step is to get the input from the terminal from the user inside our program. `rust` standard library has a `env` module which has an `args` function which can provide us the input after the command as a list of strings.

```rust
// file src/main.rs
use std::env; // bring the env module in scope

fn main() {
  let args: Vec<String> = std::args.collect();

  println!("{:?}", args);
}
```

This program when run should print a vector whose first value is the path to the program itself and the rest of the values are all the arguments we pass to the command (separated by space).

Something like this

```bash
cargo run 2 3
["target/debug/rust-cli", "2", "3"]
```

Now that we have the input from the user, we need to first transform them from strings to numbers.

```rust
// file src/main.rs
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();

    // 1. Get the arguments which start from 1st index
    // 2. Map over the arguments and parse the strings into numbers
    // 3. TODO: User's might input non-numbers. Or less than 2 arguments. Hanlde those
    // error cases later.
    let nums: Vec<i32> = args[1..].iter().map(|x| x.parse().unwrap()).collect();
    println!("{:?} {:?}",  args, nums);
}
```

We have gotten hold of the arguments. Let's add them up and print it out.

```rust
println!("The sum of {} and {} is {}",  nums[0], nums[1], nums[0] + nums[1]);

```

Our program should now be able to add 2 numbers -

```bash
cargo run 2 3
// should print "The sum of 2 and 3 is 5"
```

### Using a library to build our CLI application - `clap`

Let's build the same application using a library called [`clap`](https://docs.rs/clap/latest/clap/), which helps with a lot more than just parsing the arguments.

We will use `cargo-edit` to add the library instead of directly editing `Cargo.toml` file.

```bash
cargo add clap --feature derive
```

Our `Cargo.toml` should now have an entry for the `clap` library and it's ready to use in our program.

Now we will use `clap` to parse the arguments we pass to our app/program -

```rust
use clap::Parser;

#[derive(Debug, Parser)]
struct Cli {
    num1: i32,
    num2: i32,
}

fn main() {
    let args = Cli::parse();
    println!("{:?}", args);
    println!("The sum of {} and {} is {}", args.num1, args.num2, args.num1 + args.num2);
}
```

In the above program, we create a struct where we define 2 properties where we will hold our numbers to be added. We annotate the struct with `#[derive(Parser)]` attribute. That piece of code will enhance our `Cli` struct with the ability to read our command line arguments and parse them as per our type definitions for `num1` and `num2`. This seems like magic and probably is.

This program should now work exactly as our program without `clap`.

```bash
cargo run 2 3
// should print "The sum of 2 and 3 is 5"
```

The great thing about using `clap` is that we now get free help instructions for our program.

```bash
% cargo run -- --help
    Finished dev [unoptimized + debuginfo] target(s) in 0.07s
     Running `target/debug/rust-cli --help`
Usage: rust-cli <NUM1> <NUM2>

Arguments:
  <NUM1>
  <NUM2>

Options:
  -h, --help  Print help
```

Not just that, we also get some free error handling. What if the user who invokes our command provides something other than a number as input? The `clap` parser will catch it and let the user know -

```bash
% cargo run 2 three
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/rust-cli 2 three`
error: invalid value 'three' for '<NUM2>': invalid digit found in string

For more information, try '--help'.
```

Of course `clap` provides much more than this.
