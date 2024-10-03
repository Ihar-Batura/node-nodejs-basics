import fs from 'fs/promises'; // позволяет взаимодействовать с файловой системой
import path from 'path'; // path предоставляет утилиты для работы с путями к файлам и каталогам
import { fileURLToPath } from 'url'; // принимает строку URL файла или объект URL и преобразует их в правильно закодированный путь.
import { dirname } from 'path'; // используется для получения имени каталога указанного пути. Он игнорирует конечные разделители каталогов соответствующей платформы.

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'files/fresh.txt');

const create = async () => {
  try {
    await fs.writeFile(pathToFile, 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();

// Flag 'wx':  завершается ошибкой, если путь существует.
