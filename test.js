const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (msg) => console.log('From worker:', msg));
  worker.postMessage('Hello Worker');
} else {
  parentPort.on('message', (msg) => {
    parentPort.postMessage(msg + ' received!');
  });
}
