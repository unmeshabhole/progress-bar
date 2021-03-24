import React from 'React'
import { render, screen } from '@testing-library/react'
import MainContainer from './MainContainer'

test('renders learn react link', () => {
    render(<MainContainer />)
    const linkElement = screen.getByTestId('app')
    expect(linkElement).toHaveAttribute('class')
})
