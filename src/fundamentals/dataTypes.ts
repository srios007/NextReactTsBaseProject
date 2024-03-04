// Tipos de datos primitivos

// string
const fullName: string = "Cristian";

// number
const age: number = 25;

// boolean
const isSingle: boolean = true;

// undefined
const u: undefined = undefined;

// null
const n: null = null;

// Sintáxis de tipado fuerte

export interface Example {
    date: string;
    name: string;
    address: string;
}

let example: Example = {
    date: "2021-09-29",
    name: "Cristian",
    address: "Calle 123"
};

// Variables tipo any

// Útil para declarar variables que a priori 
// no sabemos de qué tipo es o será. 
// Por ejemplo cuando consultamos una API.
// Se recomienda solo usarla cuando 
// sea estrictamente necesario.

const apiConst: any = {
    prueba: "prueba"
};

// void

function printMessage(message: string): void {
    console.log(message);
}
