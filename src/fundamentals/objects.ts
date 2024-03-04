const dog = {
    name: "Boby",
    age: 5
}

interface Dog {
    name:  string;
    age:  number;
}
// constante o variable / nombre:/tipo de dato = valor

const dogAnotherWay: {
    name: string;
    age: number;
} = {
    name: "Boby",
    age: 5
}

const dogAnotherWay2: Dog = {
    name: "Boby",
    age: 5
}


/// Acceder a objetos

console.log(dog.name); // Boby