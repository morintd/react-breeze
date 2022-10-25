import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '../Alert';

describe('Alert', () => {
  test('Should be visible by default', () => {
    render(<Alert>mock-children</Alert>);
    expect(screen.getByRole('alert')).not.toHaveClass(`opacity-0`);
  });

  test('Should be invisibe if visible is set to false', () => {
    render(<Alert visible={false}>mock-children</Alert>);
    expect(screen.getByRole('alert')).toHaveClass(`opacity-0`);
  });

  test(`Should have background`, () => {
    render(<Alert color="secondary">mock-children</Alert>);
    expect(screen.getByRole('alert')).toHaveClass(`bg-secondary-100`);
  });

  test(`Should have text`, () => {
    render(<Alert color="secondary">mock-children</Alert>);
    expect(screen.getByRole('alert')).toHaveClass(`text-secondary-800`);
  });

  test(`Should have border`, () => {
    render(<Alert color="secondary">mock-children</Alert>);
    expect(screen.getByRole('alert')).toHaveClass(`border-secondary-200`);
  });
});
