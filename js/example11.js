const list1 = [1,4,10,20,13];
const list2 = [2,12,25,15,28];

function union(list1, list2) {
    const list3 = list1.concat(list2);

    return list3.sort((a,b) => a - b);
}

const resutl = union(list1, list2);

console.log(resutl);