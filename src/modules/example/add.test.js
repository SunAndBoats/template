import { add } from './add';

test('suma 1 + 2 debe ser 3', () => {
  expect(add(1, 2)).toBe(3);
});
