import { FilterAccomplishedPipe } from './filterAccomplished.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterAccomplishedPipe();
    expect(pipe).toBeTruthy();
  });
});
