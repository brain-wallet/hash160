#!/usr/bin/env node

import hash160 from '../index.js'

const passphrase = process.argv[2] || 'aa'

const res = await hash160(passphrase)

console.log(res)
