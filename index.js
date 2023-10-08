import sha256 from 'https://cdn.skypack.dev/sha256'
import ripemd160 from 'https://cdn.skypack.dev/ripemd160-min'

function hexToBytes(hex) {
  const bytes = []
  for (let i = 0; i < hex.length; i += 2) {
    bytes.push(parseInt(hex.substr(i, 2), 16))
  }
  return new Uint8Array(bytes)
}

function bytesToHex(byteArray) {
  return Array.from(byteArray, function (byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2)
  }).join('')
}

export default async function hash160(data) {
  // If data is string, convert to Uint8Array
  if (typeof data === 'string') {
    const encoder = new TextEncoder()
    data = encoder.encode(data)
  }

  // Perform SHA-256
  const shaResult = await sha256(data)

  // Perform RIPEMD-160 on the SHA-256 result
  let ripemdResult = new ripemd160().update(hexToBytes(shaResult)).digest('hex')

  // Convert to hex string if the result is a Uint8Array
  if (ripemdResult instanceof Uint8Array) {
    ripemdResult = bytesToHex(ripemdResult)
  }

  return ripemdResult
}
