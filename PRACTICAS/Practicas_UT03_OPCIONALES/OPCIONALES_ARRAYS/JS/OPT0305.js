let array = ['hola', 'victor', 'villabalter', 'IES'];

function maxString(arr) {
    if (arr.length == 0) {
        return null;
    }

    let maximo = 0;
    let medida = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maximo) {
            maximo = arr[i].length;
            medida = arr[i];
        }
    }

    return medida;
}

console.log(maxString(array));
