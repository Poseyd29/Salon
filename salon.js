let phone = {
    brand: "Apple",
    model: "Iphone X",
    color: "Black",
    memory: 64

};

phone.whatBrand = function (b) {
    console.log(`This is a ${b} product.`)
}

phone.whatColor = function (c) {
    console.log(`This is a ${c} phone.`)
}

phone.whatModel = function (m) {
    console.log(`This is an ${m}.`)
}