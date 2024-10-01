import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToArchive = path.join(__dirname, 'files', 'archive.gz');
const pathToNewFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const gzip = zlib.createGunzip();
  const readArchive = createReadStream(pathToArchive);
  const writeNewFile = createWriteStream(pathToNewFile);
  readArchive.pipe(gzip).pipe(writeNewFile);
};

await decompress();
