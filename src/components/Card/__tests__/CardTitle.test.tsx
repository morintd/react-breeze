import React from 'react';
import { render, screen } from '@testing-library/react';

import CardTitle from '../CardTitle';

describe('CardTitle', () => {
  test('Should render children', () => {
    render(<CardTitle>mock-children</CardTitle>);
    expect(screen.getByText('mock-children')).toBeInTheDocument();
  });
});
