var globalVar = "Global Variable";
let globalLet = "Also Global but scoped with let";
const globalConst = "global constant";

{
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block scoped let";
    const blockConst = "I'm a block scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

function show(){
    var functionVar = "block scoped var";
    let functionLet = "block scoped let";
    const functionConst = "block scoped const";
}

show();

//console.log(functionVar);
//console.log(functionLet);
console.log(functionConst);