test("to GET /api/v1/status should return status 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/status");
  expect(response.status).toBe(200);
  console.log(response);
});
