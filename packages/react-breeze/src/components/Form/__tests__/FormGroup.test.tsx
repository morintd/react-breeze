import React from 'react';
import { render, screen } from '@testing-library/react';

import Form from '../Form';

describe('FormGroup', () => {
  test('Should define id for label & input', () => {
    render(
      <>
        <Form.Group id="mock-id">
          <Form.Label>mock-label</Form.Label>
          <Form.Input />
        </Form.Group>
      </>,
    );

    expect(screen.getByLabelText('mock-label')).toBeInTheDocument();
  });
});
