import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createHash } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const text = await fs.readFile(pathToFile, 'utf8');
  const hash = createHash('sha256').update(text).digest('hex');
  console.log(hash);
};

await calculateHash();

// createHash() -  используется для создания объекта Hash, который можно использовать для создания хэш-дайджестов с использованием указанного алгоритма.
// .update - обновляет данные по мере поступления
// .digest('hex') - Кодировка, которая будет использоваться
