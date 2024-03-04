// ¿Qué es una interfaz?

// En palabras poco técnicas una interfaz es como una 
// especie de molde para nuestro datos.No debemos confundir
// el término con la UI de una app, en este caso el concepto 
// de interfaz se relaciona más con la estructura de los datos
// de nuestro software.

interface Person {
    id:       number;
    name:     string;
    lastname: string;
    age:      number;
    isAdmin?:  boolean;
}

const pedro: Person = {
    id: 1,
    name: "Pedro",
    lastname: "Sanchez",
    age: 36,
    isAdmin: true,
}

const juan: Person = {
    id: 1,
    name: "Pedro",
    lastname: "Sanchez",
    age: 36,
}

// Herencia de interfaces
interface vehicle {
    plate:  string;
    color:  string;
    tires?: number;
    doors?: number;
    brand:  string;
    isNew:  boolean;
  }
  
  interface Motorcycle extends vehicle {
    isForTravel: boolean;
    cc:          number;
  }
  
  const miBici:Motorcycle = {
    plate: 'LKU76F',
    color: 'negro',
    brand: 'Honda',
    isNew: true,
    isForTravel:false,
    cc: 200,
  }