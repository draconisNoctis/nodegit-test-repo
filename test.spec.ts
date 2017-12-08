import "testcafe";

fixture('nodegit').page('https://google.de');

test("nodegit-test", async t => {
	console.log('nodegit-test');
});
