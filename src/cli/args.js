const parseArgs = () => {
  const args = process.argv.slice(2);
  let stringArgs = '';
  for (let i = 0; i < args.length; i += 2) {
    let argNewFormat = `${args[i].slice(2)} is ${args[i + 1]}${
      i + 2 === args.length ? '' : ', '
    }`;
    stringArgs += argNewFormat;
  }
  console.log(stringArgs);
};

parseArgs();
