import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const pagesOutput = join(root, '.vercel', 'output', 'static');
const workerEntrypoint = join(pagesOutput, '_worker.js', 'index.js');
const dist = join(root, 'dist');
const server = join(dist, 'server');
const client = join(dist, 'client');

await rm(dist, { recursive: true, force: true });
await mkdir(server, { recursive: true });
await mkdir(client, { recursive: true });
await cp(workerEntrypoint, join(server, 'index.js'));

for (const entry of await readdir(pagesOutput, { withFileTypes: true })) {
    if (entry.name === '_worker.js') continue;
    await cp(join(pagesOutput, entry.name), join(client, entry.name), { recursive: true });
}

console.log('Prepared Sites output in dist/.');
