import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import MainContainer from './features/mainContainer'
import ErrorBoundary from './sharedComponents/ErrorBoundary/ErrorBoundary'

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <MainContainer />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById('root')
)
