var daysInMonth = require('./daysInMonth');

function duration(durationMs, date = null) {
  const result = { day: 0, hour: 0, min: 0, sec: 0, ms: 0 };
  if (date) {
    var futureDate = new Date(date.valueOf() + durationMs);
    console.log(futureDate);

    // if(date.getMonth() !== futureDate.getMonth()){
    //   result.day = daysInMonth(date.getFullYear(), date.getMonth())-date.getDate() + futureDate.getDate();
    // }
    // if(date.getFullYear() !== futureDate.getFullYear()){
    //   result.month = 12 - date.getMonth() + 12 * (date.getFullYear()-futureDate.getFullYear()-2) + futureDate.getMonth();
    // } else {
    //   result.month = futureDate.getMonth() - date.getMonth()-1;
    // }
    // var days = daysInMonth(date.getFullYear(),date.getMonth()+1);
    
    result.year = futureDate.getFullYear() - date.getFullYear();
    // result.month = futureDate.getMonth() - date.getMonth();
    // result.day = futureDate.getDate() - date.getDate();
   
    if(date.getMonth() >= futureDate.getMonth()){
      result.year = result.year - 1;
      result.month = 12 - date.getDate() + futureDate.getDate();
    } else {
      result.month = futureDate.getMonth() - date.getMonth();
    }



    if(date.getDate() >= futureDate.getDate()){
      result.month = result.month - 1;
      result.day = daysInMonth(date.getFullYear(), date.getMonth()) - date.getDate() + futureDate.getDate();
    } else {
      result.day = futureDate.getDate() - date.getDate();
    }


    if(date.getHours() >= futureDate.getHours()){
      result.day = result.day - 1;
      result.hour = 24 - date.getHours() + futureDate.getHours();
    } else {
      result.hour = futureDate.getHours() - date.getHours();
    }


    if(date.getMinutes() >= futureDate.getMinutes()){
      result.hour = result.hour - 1;
      result.min = 60 - date.getMinutes() + futureDate.getMinutes();
    } else {
      result.min = futureDate.getMinutes() - date.getMinutes();
    }


    if(date.getSeconds() >= futureDate.getSeconds()){
      result.min = result.min - 1;
      result.sec = 60 - date.getSeconds() + futureDate.getSeconds();
    } else {
      result.sec = futureDate.getSeconds() - date.getSeconds();
    }
    result.ms = futureDate.getMilliseconds() - date.getMilliseconds();
  } else {
    const sec = 1000;
    const min = 60 * sec;
    const hour = 60 * min;
    const day = 24 * hour;

    result.day = Math.floor(durationMs / day);
    result.hour = Math.floor((durationMs - result.day * day) / hour);
    result.min = Math.floor(
      (durationMs - result.day * day - result.hour * hour) / min
    );
    result.sec = Math.floor(
      (durationMs - result.day * day - result.hour * hour - result.min * min) /
        sec
    );
    result.ms = Math.floor(
      durationMs -
        result.day * day -
        result.hour * hour -
        result.min * min -
        result.sec * sec
    );
  }
  return result;
}

module.exports = duration;
