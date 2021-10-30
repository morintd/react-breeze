import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../Card';

jest.mock('../CardTitle', () => jest.fn().mockReturnValue(<div data-testid="mock-card-title" />));

describe('Card', () => {
  test('Should render children', () => {
    render(<Card>mock-children</Card>);
    expect(screen.getByText('mock-children')).toBeInTheDocument();
  });

  test('Should include CardTitle', () => {
    render(
      <Card>
        <Card.Title>mock-children</Card.Title>
      </Card>,
    );
    expect(screen.getByTestId('mock-card-title')).toBeInTheDocument();
  });
});
