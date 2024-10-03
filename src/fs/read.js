import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileData = await fs.readFile(pathToFile);
    console.log(fileData.toLocaleString());
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
