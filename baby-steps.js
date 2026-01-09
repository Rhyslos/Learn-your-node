const array = [];

function insertArguments(){
 for(let i = 2; i < process.argv.length; i++){
    const currentArgument = Value(process.argv[i])
    array.push(currentArgument)
 }
}

insertArguments();

let totalArgument = 0;
for (let i = 0; i < array.length; i++){
    totalArgument = totalArgument + array[i];
}

console.log(totalArgument);