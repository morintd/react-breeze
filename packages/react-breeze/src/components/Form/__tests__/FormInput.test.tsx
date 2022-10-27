import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '../Form';

describe('Form.Input', () => {
  test('Should trigger event when text change', () => {
    let result = '';
    render(
      <>
        <label htmlFor="input">mock-label</label>
        <Form.Input
          id="input"
          onChange={(e) => {
            result = e.target.value;
          }}
        />
      </>,
    );

    userEvent.type(screen.getByLabelText('mock-label'), 'foo');
    expect(result).toBe('foo');
  });

  test('Should show error', () => {
    render(
      <>
        <label htmlFor="input">mock-label</label>
        <Form.Input error id="input" />
      </>,
    );

    userEvent.type(screen.getByLabelText('mock-label'), 'foo');
    expect(screen.getByLabelText('mock-label')).toHaveClass('border-danger-300');
  });

  test('Should call onEnter when Enter key is pressed', () => {
    const mockOnEnter = jest.fn();
    render(
      <>
        <label htmlFor="input">mock-label</label>
        <Form.Input onEnter={mockOnEnter} id="input" />
      </>,
    );

    userEvent.type(screen.getByLabelText('mock-label'), '{enter}');
    expect(mockOnEnter).toHaveBeenCalled();
  });
});
