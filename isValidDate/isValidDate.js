/**
 * validate date
 *
 * @param  {String} date
 * @returns {Boolean} Returns true or false.
 *
 */

function isValidDate(date) {
    if (typeof date === 'object') return false;
    let tableDate = date.split('/');
    let month = tableDate[1];
    let day = tableDate[2];
    let year = tableDate[0];
    let newDate = new Date(parseInt(year), parseInt(month), 0);
    return (
        newDate.getDate() >= parseInt(day) &&
        newDate.getMonth() === parseInt(month) - 1
    );
}

module.exports = isValidDate;
