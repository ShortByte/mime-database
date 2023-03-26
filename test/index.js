const { getType } = require('../dist');
const assert = require('assert');

describe('mime-database', () => {

  it('Should hav .json and .js as having UTF-8 charsets', () => {
    assert.strictEqual('UTF-8', getType('application/json').charset);
  })
});