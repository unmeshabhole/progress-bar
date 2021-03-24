const getControls = function () {
    return fetch('https://pb-api.herokuapp.com/bars')
        .then((data) => data.json())
        .catch(function () {
            return {
                buttons: [26, 25, -43, -8],
                bars: [77, 43, 40, 55],
                limit: 180,
            }
        })
}

export default getControls
