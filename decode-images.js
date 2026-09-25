const fs = require('fs');
fs.mkdirSync('public/img', { recursive: true });
for (const f of ['index.html', 'styles.css', 'app.js']) {
  fs.copyFileSync(f, 'public/' + f);
}
for (const f of fs.readdirSync('img-b64')) {
  if (!f.endsWith('.b64')) continue;
  const out = 'public/img/' + f.slice(0, -4);
  fs.writeFileSync(out, Buffer.from(fs.readFileSync('img-b64/' + f, 'utf8'), 'base64'));
  console.log('decoded', out, fs.statSync(out).size);
}
