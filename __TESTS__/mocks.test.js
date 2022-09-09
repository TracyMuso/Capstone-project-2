import { fetchComments } from './mocks.js';
import {counter} from './mocks.js'

describe('Count comments with jest', () => {
  test('should have 2 comments ', async () => {
    const response = await fetchComments();
    expect(response).toHaveLength(2);
  });
});


test('Number counter function returns', async () => {
  const itemsNumber = counter()
  expect(itemsNumber).toBe(5)
})

test('Type of counter function', async () => {
  const itemsNumber = counter()
  expect(typeof itemsNumber).toBe('number')
})