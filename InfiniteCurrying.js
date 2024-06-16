function counter(args){
    let count=0;
    count++;
    if(args==0){
        return count;
    }
    else {
        return function inner(args){
            count++;
            if(args==0){
                return count;
            }
            else {
                return inner;
            }
        }
    }
}
