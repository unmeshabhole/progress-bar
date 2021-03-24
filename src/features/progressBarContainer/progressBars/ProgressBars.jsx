import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from '../../../sharedComponents/ProgressBar'

const ProgressBars = (props) => {
    return (
        <>
            {props.progressPercentagesPerBar &&
                props.progressPercentagesPerBar.map(function (
                    progressPercentage,
                    index
                ) {
                    return (
                        <ProgressBar
                            key={index}
                            limit={props.limit}
                            percentRange={progressPercentage}
                        />
                    )
                })}
        </>
    )
}

export default ProgressBars

ProgressBars.propTypes = {
    limit: PropTypes.number,
    progressPercentagesPerBar: PropTypes.func,
}
