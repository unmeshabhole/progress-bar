import React from 'react'
import PropTypes from 'prop-types'
import './progress-bar-selector.scss'

const ProgressBarSelector = (props) => {
    return (
        <div className="grid dropdownalign">
            <select
                onChange={(e) =>
                    props.setCurrentBar(parseInt(e.currentTarget.value))
                }
            >
                {props.bars &&
                    props.bars.map((label, index) => {
                        return (
                            <option key={index} value={index}>
                                #progress{index + 1}
                            </option>
                        )
                    })}
            </select>
        </div>
    )
}

export default ProgressBarSelector

ProgressBarSelector.propTypes = {
    bars: PropTypes.arrayOf(PropTypes.number),
    setCurrentBar: PropTypes.func,
}
