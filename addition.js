function addition (dateStart, days) {
    console.log(new Date(dateStart.valueOf() + (days*24*60*60*1000)))
    return new Date(dateStart.valueOf() + (days*24*60*60*1000));
}

module.exports = addition;