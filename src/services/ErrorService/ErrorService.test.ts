import { ErrorService } from './ErrorService';

describe('ErrorService', () => {
  const text = 'Test Error Message';
  const errorService = new ErrorService(text);

  test('should get error messages', () => {
    expect(errorService.returnErrorMessages()).toBe('Test Error Message');
  });

  test('should show alert with error message', () => {
    window.alert = jest.fn();
    errorService.showError();
    expect(window.alert).toHaveBeenCalledWith('Test Error Message');
  });
});
