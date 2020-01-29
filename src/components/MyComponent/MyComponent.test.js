import React from 'react'
import { render } from '@testing-library/react'
import MyComponent from './MyComponent'


test('renders message', () => {
    const { getByText } = render(
        <MyComponent firstName='Carlos' lastName='Kidman' />
    );
    expect(getByText(/Carlos Kidman/)).toBeInTheDocument();
});
