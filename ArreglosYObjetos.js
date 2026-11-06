const numeros = [1,2,3,4,5];

const dobles = numeros.map(
    n=>n*2
);

console.log(numeros);
console.log(dobles);

const elementosLista = numeros.map(n=> `<li>Numero: ${n}</li>`);
console.log(elementosLista.join(""));

const usuario = {
    nombre: "Jesus Adrian",
    edad: 22,
    hobbies: ["PowerLifting", "Coach", "Guitarra"],
    direccion: {
        calle:"calle",
        numero: "1234"
    },
    saludar: function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`
    }
};

usuario.edad = 21;

console.log(usuario);
console.log(usuario.saludar());

let x=18;

if (x >= 18) {
    console.log("Puede pasar");
}else{
    console.log("No puede pasar");
}

let dia = 1;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
    default:
        console.log("No es ni lunes ni martes");
}

for (const llave in usuario) {
    console.log(`${llave} = ${usuario[llave]}`);
}

for (const hobbie of usuario.hobbies) {
    console.log(hobbie);
}

for (let index = 0; index < usuario.hobbies.length; index++) {
    console.log(usuario.hobbies[index]);
    
}