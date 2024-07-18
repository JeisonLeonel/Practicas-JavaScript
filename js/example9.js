const people = [
    { name: 'John', edad: 30},
    { name: 'Juan', edad: 18},
    { name: 'Carlos', edad: 45},
    { name: 'Maria', edad: 28},
    { name: 'Laura', edad: 35}
];

function OrderedList(people, edad){
    return people.sort((a,b) => a[edad] - b[edad]);
}

const result = OrderedList(people, 'edad');

console.log(result);