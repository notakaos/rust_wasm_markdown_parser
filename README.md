# Wasm markdown parser example with Rust

reference: https://www.youtube.com/watch?v=Mj6hTGo0oGc

## Demo

* https://notakaos.github.io/rust_wasm_markdown_parser/

## Development

### Requirements

* [rustup](https://github.com/rust-lang/rustup.rs)
* rust 1.35.0
* node.js >= 10.x

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

# Complie rust code
npm run build:wasm-debug
## or
npm run build:wasm-release

# Run webpack-dev-server
npm install
npm run dev
open http://localhost:8080
```

### format code

```bash
cargo fmt
```

# LISENCE

MIT
