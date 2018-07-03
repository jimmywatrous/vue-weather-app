const API_PROXY='https://cors-anywhere.herokuapp.com/';
const API_KEY='b531a83c64a3236fe0d0e595474f02b1';
const API_URL=`${API_PROXY}https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`;
function getForecast() {
    return(
        fetch(API_URL)
            .then(response => response.json())
        )
}

export default {
    getForecast
};