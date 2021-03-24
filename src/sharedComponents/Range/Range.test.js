import React from 'React'
import { render, screen } from '@testing-library/react'
import Range from './Range'

test('Renders the  range div', () => {
    render(<Range />)
    const linkElement = screen.getByTestId('range-bar')
    expect(linkElement).toHaveAttribute('style')
})
