import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToNewArchive = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = zlib.createGzip();
  const readFile = createReadStream(pathToFile);
  const writeFile = createWriteStream(pathToNewArchive);
  readFile.pipe(gzip).pipe(writeFile);
};

await compress();
