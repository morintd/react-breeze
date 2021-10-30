import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '../Alert';
import { ColorVariants } from '../../types';

describe('Alert', () => {
  const colors: Array<ColorVariants> = ['secondary', 'success', 'info', 'warning', 'danger'];

  test('Should be visible by default', () => {
    render(<Alert>mock-children</Alert>);
    expect(screen.getByRole('alert')).not.toHaveClass(`opacity-0`);
  });

  test('Should be invisibe if visible is set to false', () => {
    render(<Alert visible={false}>mock-children</Alert>);
    expect(screen.getByRole('alert')).toHaveClass(`opacity-0`);
  });

  describe('by default, color: primary', () => {
    test(`Should have background`, () => {
      render(<Alert>mock-children</Alert>);
      expect(screen.getByRole('alert')).toHaveClass(`bg-primary-100`);
    });

    test(`Should have text`, () => {
      render(<Alert>mock-children</Alert>);
      expect(screen.getByRole('alert')).toHaveClass(`text-primary-800`);
    });

    test(`Should have border`, () => {
      render(<Alert>mock-children</Alert>);
      expect(screen.getByRole('alert')).toHaveClass(`border-primary-200`);
    });
  });

  colors.forEach((color) => {
    describe(`with color: ${color}`, () => {
      test(`Should have background`, () => {
        render(<Alert color={color}>mock-children</Alert>);
        expect(screen.getByRole('alert')).toHaveClass(`bg-${color}-100`);
      });

      test(`Should have text`, () => {
        render(<Alert color={color}>mock-children</Alert>);
        expect(screen.getByRole('alert')).toHaveClass(`text-${color}-800`);
      });

      test(`Should have border`, () => {
        render(<Alert color={color}>mock-children</Alert>);
        expect(screen.getByRole('alert')).toHaveClass(`border-${color}-200`);
      });
    });
  });
});
