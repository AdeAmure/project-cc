const { greet } = require('../src/index');

const assert = require('assert');

try {
  assert.strictEqual(greet('Alice'), 'Hello, Alice!');
  console.log('✅ Test passed');
} catch (e) {
  console.error('❌ Test failed:', e.message);
  process.exit(1);
}
