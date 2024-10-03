import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();

// worker.workerData - Произвольное значение JavaScript, содержащее клон данных, переданных в конструктор Worker этого потока. Данные клонируются как при использовании postMessage(), в соответствии с алгоритмом HTML structured clone algorithm.

// Если данный поток является Worker, то это MessagePort, обеспечивающий связь с родительским потоком. Сообщения, отправленные с помощью parentPort.postMessage(), доступны в родительском потоке с помощью worker.on('message'), а сообщения, отправленные из родительского потока с помощью worker.postMessage(), доступны в этом потоке с помощью parentPort.on('message').
