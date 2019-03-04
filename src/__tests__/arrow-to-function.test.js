jest.autoMockOff();
const defineTest = require('../../src/testUtils').defineTest;

describe('arrow-to-function', () => {
    defineTest(__dirname, 'arrow-to-function', null, 'defaultExportedArrow');
});