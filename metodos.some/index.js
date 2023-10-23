// some

// usado para retornar falso ou verdadeiro

const numero = [10, 6, 3, 9, 15, 13, 2];

const value = numero.some(maiorQue10);

function maiorQue10(element, index, array) {
    return element > 10;
}

console.log (value);