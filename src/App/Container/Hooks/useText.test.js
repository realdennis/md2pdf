import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import useText from './useText';
import { initialText } from './InitialText';

test('should set initial', () => {
  const { result } = renderHook(() => useText());
  expect(result.current[0]).toEqual(initialText);
});
test('should change text', () => {
  const { result } = renderHook(() => useText());
  act(() => result.current[1]('work'));
  expect(result.current[0]).toBe('work');
});
