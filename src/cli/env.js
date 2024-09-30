const parseEnv = () => {
  const envVariables = Object.keys(process.env).filter(
    (envVariables) => envVariables.slice(0, 4) === 'RSS_'
  );
  let conclusion = '';
  for (let i = 0; i < envVariables.length; i++) {
    let envVar = `${envVariables[i]}=${process.env[envVariables[i]]}${
      i + 1 === envVariables.length ? '' : '; '
    }`;
    conclusion += envVar;
  }
  console.log(conclusion);
};

parseEnv();
