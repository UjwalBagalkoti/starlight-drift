const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

test('static entry point has responsive HTML metadata and game mount', () => {
  assert.match(html, /<title>Starlight Drift<\/title>/);
  assert.match(html, /name="viewport"/i);
  assert.match(html, /id="game"/);
});

test('Phaser is loaded from the pinned CDN version', () => {
  assert.match(html, /cdnjs\.cloudflare\.com\/ajax\/libs\/phaser\/3\.80\.1\/phaser\.min\.js/);
});

test('all expected game scenes and game boot configuration exist', () => {
  for (const scene of ['class Boot extends Phaser.Scene', 'class Menu extends Phaser.Scene', 'class Play extends Phaser.Scene']) {
    assert.ok(html.includes(scene), `Missing expected scene: ${scene}`);
  }
  assert.match(html, /scene:\s*\[Boot, Menu, Play\]/);
  assert.match(html, /parent:\s*'game'/);
});

test('keyboard and touch gameplay controls are present', () => {
  for (const control of ['keydown-SPACE', 'keydown-M', 'keydown-P', 'pointerdown', 'createCursorKeys']) {
    assert.ok(html.includes(control), `Missing control hook: ${control}`);
  }
});

test('persistent score access is guarded for restricted browser storage', () => {
  assert.match(html, /function loadBest\(\)\s*\{\s*try/);
  assert.match(html, /function saveBest\(v\)\s*\{\s*try/);
  assert.match(html, /function loadTop\(\)\s*\{\s*try/);
});

test('inline JavaScript parses without syntax errors', () => {
  const scriptStart = html.indexOf('<script>');
  const scriptEnd = html.indexOf('</script>', scriptStart);
  assert.ok(scriptStart >= 0 && scriptEnd > scriptStart, 'Expected an inline game script');
  const source = html.slice(scriptStart + '<script>'.length, scriptEnd);
  assert.ok(source.trim(), 'Expected non-empty inline game script');
  new vm.Script(source, { filename: 'index.html:inline-script' });
});
