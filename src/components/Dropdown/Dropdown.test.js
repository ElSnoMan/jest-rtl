import React from 'react'
import { render } from '@testing-library/react'
import DropdownButton from './Dropdown'


test('Dropdown Button reveals options when clicked', () => {
    const { getByText } = render(<DropdownButton/>);
    const dropdown = getByText('Dropdown Button');
    dropdown.click();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('Another action')).toBeInTheDocument();
    expect(getByText('Something else')).toBeInTheDocument();
});
