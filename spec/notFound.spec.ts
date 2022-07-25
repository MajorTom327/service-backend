import request from 'supertest';
import app from '~/app';

test("Should return 404 on not found", async () => {
  await request(app)
    .get("/not-found")
    .expect(404)
})
