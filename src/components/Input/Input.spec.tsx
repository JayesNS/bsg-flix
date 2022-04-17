/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component', () => {
    expect(() => render(<Input type="text" value="" onChange={() => {}} />)).not.toThrow();
  });

  it('should apply value', () => {
    render(<Input type="text" value="test" onChange={() => {}} testID="test-input" />);

    const input: HTMLInputElement = screen.getByTestId('test-input');

    expect(input.value).toBe('test');
  });

  it('should handle input change', () => {
    const mockHandleChange = jest.fn();

    render(<Input type="text" value="" onChange={mockHandleChange} testID="test-input" />);

    fireEvent.change(screen.getByTestId('test-input'), {target: {value: '20000'}});

    expect(mockHandleChange).toHaveBeenCalledWith('20000');
  });

  it('should display error', () => {
    render(<Input type="text" value="test" onChange={() => {}} error="error" />);

    const errorMessage = screen.getByText('error');

    expect(errorMessage).not.toBeNull();
  });
});
