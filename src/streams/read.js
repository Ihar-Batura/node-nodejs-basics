import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
const readableStream = createReadStream(pathToFile);

const read = async () => {
  readableStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });
};

await read();

//fs.createReadStream() - используется для создания читаемого потока для чтения данных из файла
