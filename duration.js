function duration(durationMs, date = null){
    const sec = 1000;
    const min = 60 * sec;
    const hour = 60 * min;
    const day = 24 * hour;

    const result = {day: 0, hour: 0, min: 0, sec: 0, ms: 0};
    result.day = Math.floor(durationMs/day);
    result.hour = Math.floor((durationMs - result.day*day)/hour);
    result.min = Math.floor((durationMs - result.day*day - result.hour*hour)/min);
    result.sec = Math.floor((durationMs - result.day*day - result.hour*hour - result.min*min)/sec);
    result.ms = Math.floor(durationMs - result.day*day - result.hour*hour - result.min*min - result.sec*sec);
    // console.log(result);
    return result;
}

module.exports = duration;