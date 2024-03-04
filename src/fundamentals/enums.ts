// Enum
// ¿Qué es un enum?
//Un enum se encarga de juntar en un solo tipo de dato un conjunto de constantes.

enum Dias {
    Lunes, //0
    Martes, //1
    Miercoles, //2
    Jueves, //3
    Viernes, //4
    Sabado, //5
    Domingo, //6
}

console.log(Dias.Martes) // 1

// Otra forma en caso de necesitar algo más complejo

class InventoryStatusEnum {
    public static readonly DISPONIBLE = new InventoryStatusEnum("DISP", "Disponible");
    public static readonly REVISION = new InventoryStatusEnum("REVI", "Revisión");
    public static readonly MANTENIMIENTO = new InventoryStatusEnum("MANT", "Mantenimiento");
    public static readonly VENDIDO = new InventoryStatusEnum("VEND", "Vendido");

    private constructor(public readonly code: string, public readonly label: string) { }
}