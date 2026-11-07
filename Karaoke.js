function prepareSongs(playlist) {

    if (playlist.length <= 0) {
        console.log("La playlist esta vacia");
        return [];
    }

    let cancionesUnicas = [];
    
    /*Este for elimina los elementos duplicados y los guarda en una lista nueva*/
    for (let i = 0; i < playlist.length; i++) {

        /*Si la cancion no esta dentro de cancionesUnicas */
        if (!cancionesUnicas.includes(playlist[i])) {
            /*Se agrega la cancion a cancion unica */
            cancionesUnicas.push(playlist[i]);
        }

        //Si la cancion ya estaba en la lista simplemente se ignora

    }

    /*Bubble sort*/

    /*Este for repite las comparaciones para cada elemento de la lista
    y asegurarnos de que al final de este for esten los elementos
    acomodados*/
    for (let i = 0; i < cancionesUnicas.length; i++) {
        
        /*Variable para detener el algoritmo si la lista ya esta ordenada*/
        let swap = false;

        /*Este for recorre la lista todas las veces que el for anterior haga el
        ciclo, dentro se realizan comparaciones e intercambios entre los elementos
        para lograr el ordenamiento*/
        for (let j = 0; j < cancionesUnicas.length-1; j++) {
            
            /*Si la cancion actual es mayor a la siguiente cancion*/
            if (cancionesUnicas[j] > cancionesUnicas[j+1]) {

                /*Se guarda la cancion actual en una variable auxiliar*/
                let aux = cancionesUnicas[j];

                /*Se intercambia la cancion actual por la siguiente cancion*/
                //Se recorre la siguiente cancion a la posicion de la cancion actual
                cancionesUnicas[j] = cancionesUnicas[j+1];
                //Se recorre la cancion actual a la posicion de la siguiente cancion
                cancionesUnicas[j+1] = aux;

                /*Si hubo un cambio se cambia su valor a true */
                swap = true;
            }
            
        }
        
        /*Si no hubo ningun cambio la lista ya esta ordenada */
        if (!swap) {
            /*Detiene el ciclo*/
            break;
        }

    }

    return cancionesUnicas;
    
}

const songs1 = [3, 1, 2, 3, 4, 2, 5]

const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]

const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []

const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []