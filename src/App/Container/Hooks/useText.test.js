import { renderHook, cleanup, act } from 'react-hooks-testing-library';
import useText from './useText';
import { initialText } from './InitialText';

describe('[Hooks] useText test', () => {
  afterEach(cleanup);
  it('should set initial', () => {
    const { result } = renderHook(() => useText());
    expect(result.current[0]).toEqual(initialText);
  });
  it('should change text', () => {
    const { result } = renderHook(() => useText());
    act(() => result.current[1]('work'));
    expect(result.current[0]).toBe('work');
  });
});
