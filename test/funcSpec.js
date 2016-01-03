var chai = require("chai");
var expect = require("chai").expect;

var func = require("../lib/func.js");
require("../lib/func-null.js");

describe("start funcSpec.js unit test", function() {

  // before(function() {
  //   console.log('before');
  // });
  //
  // after(function() {
  //   console.log('after');
  // });

  // beforeEach(function() {
  //   console.log('beforeEach');
  // });
  //
  // afterEach(function() {
  //   console.log('afterEach');
  // });

  it("should return lowercase of string", function(done) {
    var inputWord = 'HELLO WORLD';
    var outputWord = func.sanitize(inputWord);

    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO WORLD');
    expect(outputWord).to.contain('hello');

    done();
  });

  it("should remove any hyphen", function(done) {
    var inputWord = 'HELLO-WORLD-';
    var outputWord = func.sanitize(inputWord);

    expect(outputWord).to.be.a('string');
    expect(outputWord).to.not.be.a('number');
    expect(outputWord).to.equal('hello world');
    expect(outputWord).to.not.equal('HELLO-WORLD-');
    expect(outputWord).to.contain('hello');

    done();
  });

  // skip this test
  it.skip("should return array by split string", function(done) {
    var inputWord = 'hello world';
    var outputArray = func.tokenize(inputWord);

    expect(outputArray).to.be.a('array');
    expect(outputArray.length).to.equal(2);
    expect(outputArray[0]).to.equal('hello');
    expect(outputArray).to.include.members(['world']);

    done();
  });

});
