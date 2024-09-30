import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldPathToFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const newPathToFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.rename(oldPathToFile, newPathToFile);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
