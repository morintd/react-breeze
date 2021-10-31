import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from '../Title';
import { HeadingLevel } from '../../types';

describe('Title', () => {
  test('Should render children', () => {
    render(<Title>mock-children</Title>);
    expect(screen.getByText('mock-children')).toBeInTheDocument();
  });

  const headings: Array<[number, string]> = [
    [1, '4xl'],
    [2, '3xl'],
    [3, '2xl'],
    [4, 'xl'],
    [5, 'lg'],
    [6, 'base'],
  ];

  headings.forEach(([level, fontSize]) => {
    describe(`h${level}`, () => {
      const heading = `h${level}` as HeadingLevel;

      test(`Should render as h${level}`, () => {
        render(<Title as={heading}>mock-children</Title>);
        expect(screen.getByRole('heading', { level })).toBeInTheDocument();
      });

      test(`Should render with font size ${fontSize}`, () => {
        render(<Title as={heading}>mock-children</Title>);
        expect(screen.getByRole('heading', { level })).toHaveClass(`text-${fontSize}`);
      });
    });
  });
});
