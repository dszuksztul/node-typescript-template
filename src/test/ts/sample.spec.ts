///<reference path="../../../lib/jasmine.d.ts" />
import sample = require('../../main/ts/sample');

describe("sample hello word", function() {
	it("should return 'hello word'", function() {
		expect( sample.returnHelloWord() ).toEqual( 'Hello word' );
	});
} );