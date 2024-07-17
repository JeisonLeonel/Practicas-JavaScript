const ListNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function esPrimo(num) {
    if (num <= 1) return false; // 0 y 1 no son números primos
    if (num <= 3) return true; // 2 y 3 son números primos

    // Eliminar múltiplos de 2 y 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Verificar números desde 5 hasta la raíz cuadrada de num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function numPrimos(ListNum) {
    const primos = [];
    
    for (let i = 0; i < ListNum.length; i++) {
        if (esPrimo(ListNum[i])) {
        primos.push(ListNum[i]);
        }
    }
    
    return primos;
    }

  // Lista de números


  // Obtener números primos de la lista
const primos = numPrimos(ListNum);
console.log(primos); // Imprimirá: [2, 3, 5, 7, 11]