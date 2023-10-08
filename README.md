<div align="center">  
  <h1>hash160</h1>
</div>

<div align="center">  
<i>hash160</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brain-wallet/hash160/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/hash160)](https://npmjs.com/package/hash160)
[![npm](https://img.shields.io/npm/dw/hash160.svg)](https://npmjs.com/package/hash160)
[![Github Stars](https://img.shields.io/github/stars/brain-wallet/hash160.svg)](https://github.com/brain-wallet/hash160/)

Certainly! Below is a sample README.md file for your project:

---

# Hash160 Calculator

This JavaScript module allows you to easily calculate the Hash160 of a given input data. The Hash160 is a common hashing operation used in blockchain technologies, involving two steps: a SHA-256 hash, followed by a RIPEMD-160 hash. This module uses the SHA-256 and RIPEMD-160 functions from the skypack.dev CDN.

## Installation

There's no installation required! Since the dependencies are linked through Skypack, you only need to import the module in your JavaScript project to utilize the hash160 function.

## Usage

Here's a simple usage example:

```javascript
import hash160 from 'hash160'

async function example() {
  const data = 'Your input data here'
  const result = await hash160(data)
  console.log(`Hash160 of "${data}" is: ${result}`)
}

example()
```

Function `hash160` takes a string or a Uint8Array as input and returns a promise that resolves to the calculated hash in a hex-encoded string format.

### Example of Converting String Data:

```javascript
const hashResult = await hash160('Example Data')
```

### Example of Converting Uint8Array Data:

```javascript
const encoder = new TextEncoder()
const data = encoder.encode('Example Data')
const hashResult = await hash160(data)
```

## Demo

Check out the `main.html` file in the repository for a simple and interactive web demo illustrating the use of the `hash160` function. Simply input the text you'd like to hash, and see the Hash160 calculated in real-time. Try it [here](./main.html).

### Try it out:

- Clone the repository
- Open `main.html` in your preferred browser
- Input the text you'd like to hash
- The Hash160 result will be displayed below the input field.

## Dependencies

- [sha256](https://cdn.skypack.dev/sha256) from Skypack
- [ripemd160-min](https://cdn.skypack.dev/ripemd160-min) from Skypack

## Contributing

We welcome contributions! Please feel free to submit a pull request with any improvements.

## License

This project is released under [MIT License](LICENSE).

---

Feel free to adjust paths, links, and descriptions according to your actual project details. If you have a LICENSE file, make sure to link it correctly in the License section. If not, you may specify the license type directly in the README.
