interface item {
    name: string
    price: number
}
//two objects to form
const vegetable: item = {
    name: `onion`
    price: 1000
}
const fruit: item = {
    name: `watermelon`
    price: 300
}

console.log(`vegetable name:${vegetable.name},vegetable price: ${vegetable.price}`)
console.log(`fruit name:${fruit.name},fruit price: ${fruit.price}`)