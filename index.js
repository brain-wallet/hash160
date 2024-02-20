import ripemd from './js/ripemd.js'
import sha256 from './js/sha256.js'

export default async function hash160(str) {
  const hex = await sha256(str)
  const res = await ripemd(hex)
  return res
}
