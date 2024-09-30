import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFolder = path.join(__dirname, 'files');
const pathToNewFolder = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.cp(pathToFolder, pathToNewFolder, { recursive: false });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
