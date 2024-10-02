import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, 'worker.js');

const startNumber = 10;

const fibWorkerService = (number) =>
  new Promise((resolve) => {
    const worker = new Worker(pathToFile, {
      workerData: number,
    });

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });

const performCalculations = async () => {
  const workersList = Array.from({ length: cpus().length }, (_, i) =>
    fibWorkerService(startNumber + i)
  );

  const result = await Promise.all(workersList);
  console.log(result);
};

await performCalculations();

// Модуль node:worker_threads позволяет использовать потоки, параллельно выполняющие JavaScript.
// Модуль node:os предоставляет методы и свойства утилит, связанных с операционной системой.
// os.cpus() - Возвращает массив объектов, содержащих информацию о каждом логическом ядре процессора.

// Array.from() создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
// Array.from(object, mapFunction, thisValue)
