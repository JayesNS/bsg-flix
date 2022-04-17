import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';

import SignInBox from './SignInBox';
import {act} from 'react-dom/test-utils';

jest.mock('../../context', () => ({
  useAuth: () => ({
    signIn: jest.fn()
  })
}));

describe('SignInBox', () => {
  it('should render component', () => {
    expect(() => {
      render(<SignInBox />);
    }).not.toThrow();
  });

  it('should render items', () => {
    render(<SignInBox onSignIn={jest.fn()} />);

    expect(screen.getByTestId('email-input')).not.toBeNull();
    expect(screen.getByTestId('password-input')).not.toBeNull();
    expect(screen.getByTestId('sign-in-submit')).not.toBeNull();
  });

  it('should fire onSignIn', async () => {
    const mockHandleSignIn = jest.fn();

    render(<SignInBox onSignIn={mockHandleSignIn} />);
    
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(() => {
      fireEvent.change(screen.getByTestId('email-input'), {target: {value: 'example@mail.com'}});
      fireEvent.change(screen.getByTestId('password-input'), {target: {value: 'test123'}});
      fireEvent.click(screen.getByTestId('sign-in-submit'));
    });

    expect(mockHandleSignIn).toHaveBeenCalledTimes(1);
  });
});
