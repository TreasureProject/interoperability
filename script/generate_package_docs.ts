import * as util from 'node:util';
import {exec as execSync} from 'node:child_process';
const exec = util.promisify(execSync);
import * as hre from 'hardhat';
import { BuildInfo } from 'hardhat/types';
import * as path from 'path';
import { docgen } from 'solidity-docgen';
import * as fsAsync from 'fs/promises';

async function main() {
    // await generateDocsForPackage('bridgeworld');
    // await generateDocsForPackage('smolverse');
    await generateDocsForPackage('treasure-marketplace');
}

async function generateDocsForPackage(packageName: string) {
    await run(`cd lib/${packageName} && npm i`, `Installing ${packageName} node_modules`, `Done installing ${packageName} node_modules`);
    await run(`cd lib/${packageName} && npx hardhat compile`, `Compiling ${packageName} contracts`, `Done compiling ${packageName} contracts`);

    const pwd = (await exec('pwd')).stdout.trim();
    const buildInfoPaths = await getBuildArtifacts(pwd, packageName);

    const builds = await Promise.all(
        buildInfoPaths.map(async p => ({
            mtime: (await fsAsync.stat(p)).mtimeMs,
            data: JSON.parse(await fsAsync.readFile(p, 'utf8')) as BuildInfo,
        })),
    );

    // Sort most recently modified first
    builds.sort((a, b) => b.mtime - a.mtime);

    await docgen(builds.map(b => b.data), {
        pages: 'files',
        outputDir: path.join('./docs', packageName),
        collapseNewlines: true,
    });
}

async function run(command: string, beforeMessage: string, afterMessage: string) {
    console.log(beforeMessage);
    await exec(command);
    console.log(afterMessage);
}

async function getBuildArtifacts(pwd: string, packageName: string): Promise<string[]> {
    const buildInfoPath = path.join(pwd, 'lib', packageName, 'artifacts', 'build-info');

    const buildInfoPaths = await fsAsync.readdir(buildInfoPath);

    return buildInfoPaths.map(p => path.join(buildInfoPath, p));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});