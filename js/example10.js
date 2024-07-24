function mayor(num1,num2){
    if(num1>=num2){
        return 'el numero ' + num1 + ' es mayor a ' + num2;
    }
    else if(num1<=num2){
        return 'el numero ' + num2 + ' es mayor a ' + num1;
    }
    else{
        return 'Los números ' + num1 + ' y ' + num2 + ' son iguales';
    }
};

console.log(mayor(10,20));