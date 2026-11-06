function cortarIngredientes(ingredientes, callback){
    setTimeout(()=>{
        console.log(`Cortando: ${ingredientes}`);
        callback();
    },2500);
}

function cocinar(accion, callback){
    setTimeout(()=>{
        console.log(`Cocinando: ${accion}`);
        callback();
    },3000);
}

function servirPlato(plato){
    console.log(`Listo puedes disfrutar de ${plato}`);
}

function prepararReceta(plato,callback){
    console.log(`Iniciamos la preparacion de ${plato}`);

    cortarIngredientes("Vegetales", ()=>{
        cocinar("Saltear", ()=>{
            cortarIngredientes("Pollo", ()=>{
                cocinar("Freir", ()=>{
                    cocinar("Mezclar todo", ()=>{
                        servirPlato(plato);
                        callback();
                    })
                })
            })
        })
    })
}

prepararReceta("Pollo al wok", ()=>{
    console.log("Receta completa");
})