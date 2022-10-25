"use: strict";

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const table = document.getElementById("table");

for(let i = 1; i <= 100; i++){
    const div = document.createElement('div');
    div.classList.add("col");

    // divisibile per 3 e 5
    if(i % 3 == 0 && i % 5 == 0){
        div.classList.add("num-fizzbuzz");
        div.innerHTML = "fizzbuzz";
        table.append(div);
    }

    // divisibile per 3
    else if(i % 3 == 0){
        div.classList.add("num-fizz");
        div.innerHTML = "fizz";
        table.append(div);
    }

    // divisibile per 5
    else if(i % 5 == 0){
        div.classList.add("num-buzz");
        div.innerHTML = "buzz";
        table.append(div);
    }

    // non divisibile ne per 3 ne per 5
    else{
        console.log(i);
        div.classList.add("numbers");
        div.innerHTML = i;
        table.append(div);
    }
}