// hashUtils.js
async function getHashFunction() {
  if (typeof window !== 'undefined' && window.crypto) {
    // Browser environment
    return {
      hash: async (inputBuffer) => {
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', inputBuffer)
        return new Uint8Array(hashBuffer)
      }
    }
  } else {
    // Node.js environment
    const crypto = await import('crypto')
    return {
      hash: (inputBuffer) => {
        const hash = crypto.createHash('sha256')
        return hash.update(inputBuffer).digest()
      }
    }
  }
}

function hexStringToBuffer(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))
}

function bufferToHex(buffer) {
  return Array.from(buffer)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

export default async function sha256(inputHex) {
  const inputBuffer = hexStringToBuffer(inputHex)
  const hashFunction = await getHashFunction()
  const hashBuffer = await hashFunction.hash(inputBuffer)
  return bufferToHex(hashBuffer)
}
