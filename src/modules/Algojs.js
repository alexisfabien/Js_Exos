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

// --------------------------------------------------- Return Last Item -------------------------------------



// --------------------------------------------------- The Farm Problem -------------------------------------

// --------------------------------------------------- Reverse an Array -------------------------------------


// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------


// --------------------------------------------------- Boolean to String Conversion -------------------------------------


// --------------------------------------------------- Filter out Strings from an Array -------------------------------------

// --------------------------------------------------- Array of Multiples -------------------------------------


// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------

// --------------------------------------------------- Return Negative -------------------------------------

// --------------------------------------------------- Simple Loop -------------------------------------


// --------------------------------------------------- Area of a Rectangle -------------------------------------

// --------------------------------------------------- Two Makes Ten -------------------------------------


// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------

// --------------------------------------------------- Matchstick Houses -------------------------------------
