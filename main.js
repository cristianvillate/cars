/*guardar el estado (columna activa) */

let columnaActiva = 1;


//seleccionar las columnas*/

const columnas = document.querySelectorAll(".columna");

/*ESCUCHAR LOS CLICK DE CADA UNA DE ELLAS*/
columnas.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        cambiarColumna(indice);
    })


})

/*CAMBIAR ESTADO DE LAS COLUMNAS*/
function cambiarColumna(indice) {
    
    columnas[columnaActiva].classList.remove("activa");
    columnas[indice].classList.add("activa");
    columnaActiva = indice;
}