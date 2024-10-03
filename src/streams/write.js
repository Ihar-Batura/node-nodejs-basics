import { createWriteStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import process from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');
const writableStream = createWriteStream(pathToFile);

const write = async () => {
  process.stdin.pipe(writableStream);
};

await write();

// Поток Writable отвечает за запись данных в указанное место.

// .pipe() - в node основной метод модуля потоков. Он позволяет соединять потоки с разной скоростью передачи данных таким образом что данные не будут потеряны.

//Использование .pipe() имеет ряд преимуществ, например автоматическая обработка скорости ввода-вывода - node.js не будет буферизировать лишние части файла в память пока предыдущие части не отправлены клиенту с медленным соединением.
