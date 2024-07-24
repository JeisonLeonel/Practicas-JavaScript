const listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function getRamdomNumber(listNum){
    const randomIndex = Math.floor(Math.random() * listNum.length);
    return listNum[randomIndex]
}

const result = getRamdomNumber(listNum);
console.log(result);