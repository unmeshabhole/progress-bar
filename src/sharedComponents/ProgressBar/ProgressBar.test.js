import React from 'React'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

test('Renders the  range div', () => {
    render(<ProgressBar />)
    const linkElement = screen.getByTestId('progress-bar')
    expect(linkElement).toHaveAttribute('class')
})
