import { spawn } from 'child_process';
import process from 'process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const cp = spawn('node', [pathToFile, ...args]);
  process.stdin.pipe(cp.stdin);
  cp.stdout.pipe(process.stdout);
};

spawnChildProcess([0, 'A', 1, 'B', 2, 'C']);

// Экземпляры ChildProcess представляют порожденные дочерние процессы.
// child_process.spawn(command[, args][, options])
// Метод child_process.spawn() порождает новый процесс, используя заданную команду, с аргументами командной строки в args. Если args опущен, то по умолчанию используется пустой массив.
