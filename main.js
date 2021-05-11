function basicRecursionFib(n) {
    if(n === 1 || n===2) return 1;
    return basicRecursionFib(n-1) + basicRecursionFib(n-2);
}

function memoizeRecursionFib(n, cache = [0,1,1]) {
    if(cache[n]) return cache[n];
    cache[n] = memoizeRecursionFib(n-1, cache) + memoizeRecursionFib(n-2, cache);
    return cache[n];
}

function basicLoopFib(n, cache = [0,1,1]) {
    if(n === 1 || n===2) return 1;
    for(let index = 3; index <= n; index++) {
        cache[index] = cache[index-1] + cache[index-2]
    }

    return cache[n]
}

function fastLoopFib(n) {
    if(n===1 || n===2) return 1;
    let first = 1, second = 2;
    for(let index = 3; index <= n; index++) {
        second = first + second;
        first = second - first;
    }

    return second;
}


console.time('basicLoopFib')
console.log(basicLoopFib(10000))
console.timeEnd('basicLoopFib')  

console.time('fastLoopFib')
console.log(fastLoopFib(10000))
console.timeEnd('fastLoopFib')  
