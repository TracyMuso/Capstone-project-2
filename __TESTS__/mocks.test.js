import { fetchComments } from './mocks.js';

describe('Count comments with jest', () => {
  test('should have 2 comments ', async () => {
    const response = await fetchComments();
    expect(response).toHaveLength(2);
  });
});
