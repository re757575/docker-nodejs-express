var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:8080");

describe("start unit test", function() {

  it("should return home page", function(done) {

    // calling home page api
    server
      .get("/")
      .expect(200) // HTTP response status code
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end(function(err, res) {

        // var err should not exist = null
        should.not.exist(err);

        // HTTP status should be 200
        res.status.should.equal(200);

        // response text should contain 'Hello'
        res.text.should.containEql('Hello');

        done();
      });
  });

  it("should return 404 error", function(done) {

    // 404 error
    server
      .get("/not-exist-page")
      .expect(404) // HTTP response status code
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end(function(err, res) {

        // HTTP status should be 200
        res.status.should.equal(404);

        done();
      });
  });

  it("should add two number", function(done) {

    // call add api
    server
      .post("/add")
      .send({
        num1: 5,
        num2: 10
      })
      .expect(200)
      .expect("Content-type", /json/)
      .end(function(err, res) {

        res.status.should.equal(200);

        res.body.error.should.equal(false);

        res.body.data.should.equal(15);

        done();
      });
  });

});
