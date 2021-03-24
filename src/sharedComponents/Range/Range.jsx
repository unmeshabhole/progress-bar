import React from 'react'
import PropTypes from 'prop-types'
import './range.scss'

export const Range = (props) => {
    let limit = props.limit > 0 ? props.limit : 100

    return (
        <div
            data-testid="range-bar"
            className="range"
            style={{
                width: `${
                    props.percentRange > limit
                        ? 100
                        : (props.percentRange / limit) * 100
                }%`,
                background: `${props.percentRange > limit ? 'red' : '#abdbe3'}`,
            }}
        />
    )
}

export default Range

Range.propTypes = {
    percentRange: PropTypes.arrayOf(PropTypes.number),
    limit: PropTypes.number,
}
