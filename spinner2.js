const arrLines = [ '|', '/', '-', '\\'];
let timer = 100;
let times = 3;
for (let j = 0; j < times; j ++) {
  for (let char of arrLines) {
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, timer += 200);
  }
}