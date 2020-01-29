import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


it('renders React logo', () => {
  const { getByAltText } = render(<App/>);
  const logo = getByAltText('logo');
  expect(logo).toBeInTheDocument();
});


it('renders Learn React link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
});
