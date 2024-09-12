const request = require("supertest");
const { server } = require("./index.js");

describe("Express Server", () => {
  //describe to make different test in a group
  let app;
  const testPort = process.env.Port || 4000;

  beforeAll((done) => {
    app = server.listen(testPort, () => {
      console.log(`Test server running on port ${testPort}`);
      done();
    });
    //get executed before all the test
  });

  afterAll((done) => {
    // after all the tests are run close the server
    app.close(done);
  });

  test("should be running on the correct port", (done) => {
    const address = app.address();
    //as server is running so cheecking its address
    expect(address.port).toBe(Number(testPort));
    //expecting same port and checking whether that port is good or not
    done();
  });

  test("should respond with status 200 on GET /api/v1", async () => {
    const response = await request(app).get("/api/v1");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    // checking server is listening
  });

  test("login", async () => {
    const response = await request(app)
      .put("/api/v1/login")
      .send({
        UserEmail: "shiv@gmail.com",
        UserPassword: "shiv",
      })
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
    expect(response._body).toBeInstanceOf(Object);
  });

  // test("register", async () => {
  //   const response = await request(app)
  //     .post("/api/v1/register")
  //     .send({
  //       UserName: "Aryan",
  //       UserEmail: "aryan@gmail.com",
  //       UserPassword: "aryan",
  //     })
  //     .expect("Content-Type", /json/);
  //   console.log(response._body);
  //   expect(response.status).toBe(200);
  //   expect(response._body).toBeInstanceOf(Object);
  // });

  test("allnotes", async () => {
    const response = await request(app)
      .get("/api/v1/allnotes")
      .set(
        "token",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmE3MjY3MzY5OGY1MWQ3YzMyYTVlNTMiLCJpYXQiOjE3MjMwMzU1NzV9.m0pBrwwvu45P1X_wsO2Y6DyXo0AufDMaZCXIxSiAOdQ"
      )
      .expect("Content-Type", /json/);
    console.log(response);
  });
});
