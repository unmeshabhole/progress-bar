import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import ProgressBars from './progressBars'
import ProgressBarSelector from './progressBarSelector'
import './progress-bar-container.scss'
import ButtonsList from './buttonsList/ButtonsList'

const ProgressBarContainer = (props) => {
    let [progressPercentagesPerBar, setProgressPercentagesPerBar] = useState([
        0,
    ])
    let [currentBar, setCurrentBar] = useState(0)
    let [clickedButtonRange, setClickedButtonRange] = useState(0)
    let [buttonClicked, setButtonClicked] = useState(false)

    const recalculatePercentages = useCallback(() => {
        const newProgressPercentagesPerBar = [...progressPercentagesPerBar]
        if (newProgressPercentagesPerBar) {
            var newValue =
                newProgressPercentagesPerBar[currentBar] + clickedButtonRange
            newProgressPercentagesPerBar[currentBar] =
                newValue >= 0 ? newValue : 0
        }

        setProgressPercentagesPerBar(newProgressPercentagesPerBar)
    }, [clickedButtonRange, buttonClicked])

    useEffect(() => {
        if (props.bars) {
            setProgressPercentagesPerBar([...props.bars])
        }
    }, [props.bars])

    useEffect(() => {
        if (clickedButtonRange && clickedButtonRange !== 0) {
            recalculatePercentages(clickedButtonRange)
        }
    }, [clickedButtonRange, recalculatePercentages, buttonClicked])

    return (
        <div className="container">
            <ProgressBars
                limit={props.limit}
                progressPercentagesPerBar={progressPercentagesPerBar}
            />
            <div className="grid">
                <ProgressBarSelector
                    setCurrentBar={setCurrentBar}
                    bars={props.bars}
                />
                <ButtonsList
                    buttons={props.buttons}
                    setClickedButtonRange={setClickedButtonRange}
                    setButtonClicked={setButtonClicked}
                    currentBar={currentBar}
                />
            </div>
        </div>
    )
}

export default ProgressBarContainer

ProgressBarContainer.propTypes = {
    bars: PropTypes.arrayOf(PropTypes.number),
    buttons: PropTypes.arrayOf(PropTypes.number),
    limit: PropTypes.number,
}
