// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats);

function destructivelyAppendCat(Ralph){
    cats.push("Ralph")
}

function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop("Garfield")
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift("Milo")
}

function appendCat(Broom){
    const Cats_2 = [...cats, "Broom"]
    return Cats_2
}

function prependCat(Arnold){
    const Cats_2 = ["Arnold", ...cats]
    return Cats_2
}

function removeLastCat(){
    const Cats_2 = cats.slice(0, cats.length-1)
    return Cats_2
}

function removeFirstCat(){
    let Cats_2 = cats.slice()
    Cats_2.shift();
    return Cats_2
}

