import React from 'react';
import { render, screen } from '@testing-library/react';

import Spinner from '../Spinner';

describe('Spinner', () => {
  test('Should display a spinner', () => {
    render(<Spinner color="light" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
