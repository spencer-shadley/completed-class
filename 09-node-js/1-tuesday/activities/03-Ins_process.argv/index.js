// more info - https://nodejs.org/api/process.html#process_process_argv

console.log(process.argv);
console.log(JSON.parse(process.argv[2]).hello);
