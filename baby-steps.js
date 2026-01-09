const array = [];

function insertArguments(){
 for(let i = 2; i < Process.argv.length; i++){
    const currentArgument = Value(process.argv[i])
    array.push(currentArgument)
 }
}

insertArguments();

for (let i = 0; i < array.length; i++){

}