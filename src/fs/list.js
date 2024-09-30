import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(__dirname, 'files');

const list = async () => {
  try {
    const filesList = await fs.readdir(pathToFolder);
    console.log(filesList);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
