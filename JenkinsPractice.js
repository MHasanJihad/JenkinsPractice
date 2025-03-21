import { fixture, Selector } from 'testcafe';

fixture `Sample Test`
    .page `about:blank`;

test('Simple test', async t => {
    console.log("Hello from TestCafe!");
});