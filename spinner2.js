const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
let delay = 100;

spinner.forEach((shape) => {

  setTimeout(() => {
    process.stdout.write(shape + '\r');
  }, delay);
  delay += 200;
})

