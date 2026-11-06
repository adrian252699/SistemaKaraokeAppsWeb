function consultarPublicaciones(callback){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        console.log("Termine de obtener Post")
        callback(response);
    })
}

function terminarPrograma(publicaciones){
    console.log(publicaciones);
    console.log("finaliza la ejecucion");
}

console.log("Inicia la ejecucion");

consultarPublicaciones((terminarPrograma));

