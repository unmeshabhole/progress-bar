import React from 'react'
import PropTypes from 'prop-types'
import './progress-bar.scss'
import Range from '../Range'

const ProgressBar = (props) => {
    return (
        <div data-testid="progress-bar" className="progress-bar">
            <Range percentRange={props.percentRange} limit={props.limit} />
            <div className="percentage-text">{props.percentRange}%</div>
        </div>
    )
}

export default ProgressBar

ProgressBar.propTypes = {
    percentRange: PropTypes.arrayOf(PropTypes.number),
    limit: PropTypes.number,
}
