import process from 'process';
import { Transform } from 'stream';

const transformData = new Transform({
  transform(chunk, _, callback) {
    const reverseData = chunk.toString().trim().split('').reverse().join('');
    callback(null, reverseData);
  },
});

const transform = async () => {
  process.stdin.pipe(transformData).pipe(process.stdout);
};

await transform();
