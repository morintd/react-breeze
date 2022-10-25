import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Button', () => {
  test('Should display children', () => {
    render(<Button>mock-children</Button>);
    expect(screen.getByText('mock-children')).toBeInTheDocument();
  });

  test('Should call onClick', () => {
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick}>mock-children</Button>);
    userEvent.click(screen.getByRole('button'));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
