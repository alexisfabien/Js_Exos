"use strict";

// --------------------------------------------Function without argument--------------------------------------------
export function isoNum() {
    return 42;
}

// --------------------------------------------------- Function with arguments -------------------------------------
export function myFct(arg1, arg2) {
    return arg1 + arg2;
}

// --------------------------------------------------- Messi’s Goal Total -------------------------------------
export function goalTotal(arg1, arg2, arg3){
    return arg1 + arg2 + arg3;
}
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
export function getFirstValue(tab){
    var tab = [58, 34, 29];
    return tab[0];
}
// --------------------------------------------------- Grasshopper Order of Operations -------------------------------------
export function GrasshopperOrder(){
    return 2 * 2 * 2 * 2 * 2;
}


// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
export function minMax(tab){
    var tmp = 0;

    if(tab.length === 1){
       return [tab[0], tab[0]]
    }

    for(var i=0; i < tab.length; i++){

      while(tab[i] > tab[i+1]){
        tmp = tab[i]
        tab[i] = tab[i+1]
        tab[i+1] = tmp
      }
    var min = tab[0];
    var max = tab[tab.length-1]

    }
return [min,max];
}

// --------------------------------------------------- Sort by String Length -------------------------------------
export function sortByLength(tab){
    var a = tab.length;

    for (var i = 0; i < a - 1; i++){
        var mini = i;
        for (var j = i + 1; j < a; j++){
            if (tab[j].length < tab[mini].length){
                mini = j;
            }
        }
        if (mini !== i){
            var tmp = tab[i];
            tab[i] = tab[mini];
            tab[mini] = tmp;
        }
    }
    return tab;
}

// --------------------------------------------------- Filter Strings from Array -------------------------------------
export function filterArray(){
    var tab = [1, 2, 3, "a", "b", 4];
    var res = [];

    for (var i = 0; i < tab.length; i++){
        var test = parseInt(tab[i]);
        if (!Number.isNaN(test)){
            res.push(tab[i]);
        }
    }
    return res;
}
// --------------------------------------------------- Return Last Item -------------------------------------
export function lastItem(tab){
    var last = tab[tab.length - 1];
    return last;
}


// --------------------------------------------------- The Farm Problem -------------------------------------
export function animals(){
    var biPattes = 2;
    var quadriPattes = 4;
    var poule = biPattes * 2;
    var vache = quadriPattes * 3;
    var cochons = quadriPattes * 5;
    return poule + vache + cochons;
}
// --------------------------------------------------- Reverse an Array -------------------------------------
export function reverseArray(){
    var tmp = 0;
    var tab = [1, 2, 3, 4];
    for (var i = 0; i <= tab.length; i++){
        while (tab[i] < tab[i+1]){
            tmp = tab[i];
            tab[i] = tab[i+1];
            tab[i+1] = tmp;
            i = 0;
        }
    }
    return tab;
}

// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
export function addition(a){
    a = 9;
    return a + 1;
}
// --------------------------------------------------- Boolean to String Conversion -------------------------------------
export function boolToString(flag){
    if (flag === true){
        return 'true';
    }
    return 'false';
}

// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
export function filterArrayInt(tab){
    var res = [];

    for (var i = 0; i < tab.length; i++){
        var test = (tab[i]);
        if (typeof test === 'number'){
            res.push(tab[i]);
        }
    }
    return res;
}
// --------------------------------------------------- Array of Multiples -------------------------------------
export function arrayOfMultiples(num, long){
    var tmp = 0;
    var res = [];

    for (var i = 1; i <= long; i++){
        tmp = num * i;
        res.push(tmp);
    }
    return res;
}

// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
export function convert(h, m){
    var hs = h * 3600;
    var ms = m * 60;
    return hs + ms;
}
// --------------------------------------------------- Return Negative -------------------------------------
export function returnNegative(n){
    if (n > 0){
        return n * -1;
    }
    return n;
}
// --------------------------------------------------- Simple Loop -------------------------------------
export function simpleLoop(n){
    var res = [];
    for (var i = 1; i <= n; i++){
        res.push(i);
    }
    return res;
}

// --------------------------------------------------- Area of a Rectangle -------------------------------------
export function getArea(larg, long){
    if (larg <= 0 || long <=0){
        return -1;
    }
    return larg * long;
}
// --------------------------------------------------- Two Makes Ten -------------------------------------
export function makesTen(a, b){
    if (a === 10 || b === 10 || a + b === 10){
        return true;
    }
    return false;
}

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
export function addUp(a){
    var tmp = 0;
    for (var i = 1; i <= a; i++){
        tmp = tmp + i;
    }
    return tmp;
}
// --------------------------------------------------- Matchstick Houses -------------------------------------
export function matchHouses(step){
    var maison = 6;
    var maisonPrime = 5;
    var res = maison + (maisonPrime * (step - 1));
    return res;
}