import { FirebaseKeysPipe } from './firebase-keys.pipe';

describe('FirebaseKeysPipe', () => {
  it('create an instance', () => {
    const pipe = new FirebaseKeysPipe();
    expect(pipe).toBeTruthy();
  });
});
