import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.unlink(pathToFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
