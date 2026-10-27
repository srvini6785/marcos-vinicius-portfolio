import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });
for (const entry of entries) {
  if (entry.isFile() && entry.name.endsWith('.html')) {
    await copyFile(path.join(root, entry.name), path.join(output, entry.name));
  }
  if (entry.isDirectory() && entry.name === 'assets') {
    await mkdir(path.join(output, 'assets'), { recursive: true });
    const copyDirectory = async (source, destination) => {
      await mkdir(destination, { recursive: true });
      for (const child of await readdir(source, { withFileTypes: true })) {
        const sourcePath = path.join(source, child.name);
        const destinationPath = path.join(destination, child.name);
        if (child.isDirectory()) await copyDirectory(sourcePath, destinationPath);
        else await copyFile(sourcePath, destinationPath);
      }
    };
    await copyDirectory(path.join(root, 'assets'), path.join(output, 'assets'));
  }
}

console.log(`[pages] Static site prepared in ${output}.`);
