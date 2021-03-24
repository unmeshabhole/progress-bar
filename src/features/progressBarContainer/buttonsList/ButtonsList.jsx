import React from 'react'
import PropTypes from 'prop-types'

const ButtonsList = (props) => {
    return (
        <div className="grid">
            {props.buttons &&
                props.buttons.map(function (rangeCount, index) {
                    return (
                        <div key={index}>
                            <button
                                onClick={() => {
                                    props.setClickedButtonRange(rangeCount)
                                    props.setButtonClicked(Math.random())
                                }}
                            >
                                {rangeCount}
                            </button>
                        </div>
                    )
                }, this)}
        </div>
    )
}

export default ButtonsList

ButtonsList.propTypes = {
    bars: PropTypes.arrayOf(PropTypes.number),
    buttons: PropTypes.arrayOf(PropTypes.number),
    setClickedButtonRange: PropTypes.func,
    setButtonClicked: PropTypes.func,
}
