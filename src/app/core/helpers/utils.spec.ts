import { generateUniqueId } from "./utils"
import { sum } from "./utils"

describe('utils', () => {
  it('should generate unique id', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();

    expect(typeof(id1)).toBe('string');
    expect(typeof(id2)).toBe('string');

    expect(id1).not.toBe(id2);
  }) 

  it('should add 2 numbers', () => {
    expect(sum(1,2)).toBe(3);
  })
})