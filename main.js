class Jugador{
    constructor(nombre){
        this._posicion = 0;
        this._nombre = nombre;
    }  

    get posicion(){
        return this._posicion;
    }

    avanzar(tablero){
        let avance = Math.trunc(Math.random()*6+1);
        this._posicion += avance;
        console.log(this._nombre+": "+this._posicion);
        if(tablero[this._posicion] !=0 && this._posicion <=100){
            
            if(tablero[this._posicion] < 0){
                console.log("El "+this._nombre+" cayo en una Serpiente, baja a: "+Number(tablero[this._posicion]+this._posicion));

            } else{
                console.log("El "+this._nombre+" cayo en una Escalera, sube a: "+Number(tablero[this._posicion]+this._posicion));
            } 
            this._posicion += tablero[this._posicion];
        } 
    }
}

let j1 = new Jugador("Jugador 1");
let j2 = new Jugador("Jugador 2");

var tablero = new Array(101);
tablero.fill(0);

tablero[10] = 50; // Escalera 1
tablero[21] = 45; // Escalera 2
tablero[32] = 40; // Escalera 3
tablero[43] = 35; // Escalera 4
tablero[54] = 30; // Escalera 5
tablero[65] = 14; // Escalera 6
tablero[76] = 10; // Escalera 7
tablero[85] = 5; // Escalera 8

tablero[11] = -10; // Serpiente 1
tablero[22] = -20; // Serpiente 2
tablero[33] = -25; // Serpiente 3
tablero[44] = -30; // Serpiente 4
tablero[53] = -35; // Serpiente 5
tablero[62] = -40; // Serpiente 6
tablero[71] = -45; // Serpiente 7
tablero[80] = -50; // Serpiente 8
tablero[91] = -45; // Serpiente 9

while(j1.posicion<100 && j2.posicion<100){
    j1.avanzar(tablero);
    j2.avanzar(tablero);
    console.log("");
}

if (j1.posicion >= 100){
    console.log("Gano: Jugador 1");
}else{
    console.log("Gano: Jugador 2");
}