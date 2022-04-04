import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should be rendered successfully', () => {
    const { queryByTestId } = render(<App />);

    expect(queryByTestId('app')).toBeInTheDocument();
  });
});
