import { xManyTimes } from './xManyTimes.js';

describe('xManyTimes.js', () => {
  beforeEach(() => {
    window.myFn = () => {};
    spyOn(window, 'myFn');
  });

  it('runs all the time without xManyTimes', () => {
    myFn();
    myFn();
    myFn();
    expect(myFn).toHaveBeenCalledTimes(3);
  });

  it('runs only once with xManyTimes when x is 1', () => {
    window.onceFn = xManyTimes(window.myFn, 1);
    spyOn(window, 'onceFn').and.callThrough();
    onceFn();
    onceFn();
    onceFn();
    expect(onceFn).toHaveBeenCalledTimes(3);
    expect(myFn).toHaveBeenCalledTimes(1);
  });

  it('runs twice with xManyTimes when x is 2', () => {
    window.twiceFn = xManyTimes(window.myFn, 2);
    spyOn(window, 'twiceFn').and.callThrough();
    twiceFn();
    twiceFn();
    twiceFn();
    expect(twiceFn).toHaveBeenCalledTimes(3);
    expect(myFn).toHaveBeenCalledTimes(2);
  });
});
