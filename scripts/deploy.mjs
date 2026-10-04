import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');

console.log('📦 Construction du projet avec Vite...');
execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });

console.log('🚀 Déploiement sur la branche gh-pages...');
const gitRemoteUrl = execSync('git config --get remote.origin.url', { cwd: rootDir, encoding: 'utf-8' }).trim();

// Initialiser git dans le dossier dist
execSync('git init -b gh-pages', { cwd: distDir, stdio: 'inherit' });
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
execSync('git commit -m "deploy: update GitHub Pages"', { cwd: distDir, stdio: 'inherit' });
execSync(`git push -f ${gitRemoteUrl} gh-pages`, { cwd: distDir, stdio: 'inherit' });

// Nettoyage
rmSync(resolve(distDir, '.git'), { recursive: true, force: true });
console.log('✅ Déployé avec succès sur https://johan-die.github.io/mot-magique/ !');
