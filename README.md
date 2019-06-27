# Rust markdown parser example

from: https://www.youtube.com/watch?v=Mj6hTGo0oGc

## Development

### Requirements

* [rustup](https://github.com/rust-lang/rustup.rs)
* rust 1.35.0

```bash
rustup install 1.35.0
rustup default 1.35.0
rustup target add wasm32-unknown-unknown
rustup component add rustfmt
rustup component add clippy
cargo install wasm-bindgen-cli
cargo install cargo-watch
```

### build

```bash
git clone <REPOSITORY_URL>
cd markdown_parser
cargo build
```

### format

```bash
cargo fmt
```