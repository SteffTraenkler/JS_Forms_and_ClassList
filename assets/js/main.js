//Lev1_1 classList
console.log('Lev1_1 classList');
console.log('   ');

let h1b = document.getElementById("bucketlh");
console.log(h1b);

function bhead() {
    console.log("bheadline");
    h1b.classList.add('bheadline');
}
bhead()

let lib = document.getElementById("bucketlist");

function ulb() {
    console.log("blist");
    lib.classList.add('blist');
}
ulb()

//lev1_2 classList onclick
console.log('Lev1_2 classList onclick');
console.log('   ');

function changeHeadline() {
    console.log('changeHeadline');
    h1b.classList.add('changeHeadline');
    h1b.classList.remove('bheadline');
}

function resetHeadline() {
    console.log('resetHeadline');
    h1b.classList.add('bheadline');
    h1b.classList.remove('changeHeadline');
}

//Lev1_1 forms

let x = document.getElementById("zahl");
let result = document.getElementById("result");

function zahleingabe() {
    console.log(x.value);
    y = x.value * 2;
    result.innerHTML = y;
}

//Lev1_2 age calc

let bdate = document.getElementById('year');
let result2 = document.getElementById('result_age');

function byear() {
    console.log(bdate.value);
    a = 2022 - bdate.value;
    result2.innerHTML = a;
}

//Lev1_3 forms compare age

let age1 = document.getElementById('age1');
let age2 = document.getElementById('age2');
let result3 = document.getElementById('resultcomp');

function calc() {
    console.log(age1.value);
    console.log(age2.value);
    comp = age1.value - age2.value;
    if (comp < 0) {
        comp = -(age1.value - age2.value);
    } else {
        comp = age1.value - age2.value;
    }
    result3.innerHTML = comp;
}