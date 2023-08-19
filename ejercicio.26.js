/* 
    Programa una función que dado un arreglo de números obtenga el promedio, 
    pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const averageListNumbers = (list = undefined) => {
    if (list === undefined) return console.warn("No ingresaste una lista de números");
    if (!(list instanceof Array)) return console.error("El valor que ingresaste no es una lista");
    if (list.length === 0) return console.error("La lista esta vacia");

    for (let num of list){
        if (typeof num !== "number") return console.error(`El valor '${num}' ingresado, NO es un número`);
    }

    let sum = 0;

    for (let i=0; i<list.length; i++) {
        sum += list[i];
    }

    return console.info({
        list,
        promedio: sum/list.length
    });
}

console.info("EJERCICIO 26");
averageListNumbers();
averageListNumbers(true);
averageListNumbers([]);
averageListNumbers([1, 2, 3, "cinco"]);
averageListNumbers([9,8,7,6,5,4,3,2,1,0]);
