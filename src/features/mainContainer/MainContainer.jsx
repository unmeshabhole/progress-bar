import React, { useEffect, useState } from 'react'
import './MainContainer.scss'
import ProgressBarContainer from '../progressBarContainer'
import getControls from '../../services/controlsService'

function MainContainer() {
    const [controlsList, setControlsList] = useState([])

    useEffect(() => {
        let mounted = true

        getControls().then((items) => {
            console.log('reached to useEffect')
            console.log(items)
            if (mounted) {
                setControlsList(items)
            }
        })
        return () => (mounted = false)
    }, [])

    return (
        <div data-testid="app" className="App">
            <ProgressBarContainer
                limit={
                    controlsList && controlsList.limit
                        ? controlsList.limit
                        : 100
                }
                buttons={
                    controlsList && controlsList.buttons
                        ? controlsList.buttons
                        : null
                }
                bars={
                    controlsList && controlsList.bars ? controlsList.bars : null
                }
            />
        </div>
    )
}

export default MainContainer
