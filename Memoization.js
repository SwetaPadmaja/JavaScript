function calc(n){
let sum=0;
for(let i=0;i<n;i++){
    sum+=n;
}
return sum;

}
//end of calc function
function memoize(fn){
    let cache={};//initialising cache array
    return function(n){
        let istheInputPresent =cache[n]==undefined; // if cache is having undefined values
        if(istheInputPresent){ // if cache is having any value
            return cache[n]; //return cache
        }
        else{
            const result = fn(n); //if cache is empty
            cache[n]=result; // save result as cache[n]
            return result;
        }
    }
}

let efficientCalcFn = memoize(calc); // callcing calc function in memoize
console.time(); //start the timer
efficientCalcFn(5); // calling calc with number 5
console.timeEnd(); // ending the timer - during this time all execution stmts are ran
console.time(); // start timer once again totestif it takes the same time  to execute all or taking from cache
efficientCalcFn(5); // start executing 
console.timeEnd(); // end timer, this time same operation takes very less time as theabove contains the result in cache
