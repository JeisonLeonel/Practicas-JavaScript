const unorderedList = [1 , 3, 9, 4 , 8, 2, 6, 7, 5, 11, 10];

function OrderedList(unorderedList){
    return unorderedList.sort((a,b) => a - b);
};

const result = OrderedList(unorderedList);

console.log(result);