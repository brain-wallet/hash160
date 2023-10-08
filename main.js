import hash160 from './index.js'

async function main() {
    const data = '034da006f958beba78ec54443df4a3f52237253f7ae8cbdb17dccf3feaa57f3126'
    const hash = await hash160(data)
    console.log(`Hash160 of "${data}" is: ${hash}`)
}

main()
