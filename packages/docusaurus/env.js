const os = require('node:os');
const v8 = require('node:v8');

console.log(`Build Environment:
  Cores: ${os.availableParallelism()}
  RAM:
    Total: ${os.totalmem()} B = ${os.totalmem() / 1024 ** 3} GiB
    Free: ${os.freemem()} B = ${os.freemem() / 1024 ** 3} GiB
  Heap: ${v8.getHeapStatistics().total_available_size} B = ${v8.getHeapStatistics().total_available_size / 1024 ** 3} GiB
  Environment:
    NODE_ENV: ${process.env.NODE_ENV}
    CONTEXT: ${process.env.CONTEXT}
`);
