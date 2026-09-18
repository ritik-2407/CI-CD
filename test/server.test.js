const test = require('node:test');
const assert = require('node:assert');
const server = require('../server');

test('server responds with Hello from server v2', async () => {
  await new Promise((resolve) => {
    server.listen(3000, resolve);
  });

  const response = await fetch('http://localhost:3000');

  assert.strictEqual(response.status, 200);

  const body = await response.text();

  assert.strictEqual(body, 'Hello from server v2\n');

  server.close();
});