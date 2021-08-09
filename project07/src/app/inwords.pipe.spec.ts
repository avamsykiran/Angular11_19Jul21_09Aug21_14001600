import { InwordsPipe } from './inwords.pipe';

describe('InwordsPipe', () => {
  it('create an instance', () => {
    const pipe = new InwordsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "ONE ZERO TWO FOUR " given 1024', () => {
    const pipe = new InwordsPipe();
    expect(pipe.transform(1024)).toBe("ONE ZERO TWO FOUR ")
  });
});
