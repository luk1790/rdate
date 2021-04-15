# rDate ![npm](https://img.shields.io/npm/v/rdate)
rDate is javascript library for manipulate date
## Example Usage
```javascript
const { duration } = require('rdate') 
const duration = require('rdate/duration') 
``` 
or 
```javascript
import { duration } from 'rdate'
import duration from 'rdate/duration'
```
## List of functions:
+ [daysInMonth](#--daysInMonth)
+ [duration](#--duration)
+ [format](#--format)
+ [isEarlier](#--isEarlier)
+ [isLater](#--isLater)
+ [isToday](#--isToday)
+ [parseDate](#--parseDate)
+ [sub](#--sub)
+ [isValidDate](#--isValidDate)


## Functions
### - daysInMonth()

```javascript
daysInMonth(year, month)
```

options:
- year - number
- month - number

Sample:
```javascript
 daysInMonth(2019,2)
 // 28
```
result: numbers of days in month and year

### - format()

```javascript
format(date, format)
```

options:
- date - date in javaScript (`new Date()`)
- format
    - `'MM'` - months
    - `'DD'` - days
    - `'YYYY'` / `'YY'` - years
    - `'hh'` - hours
    - `'mm'` - minutes
    - `'ss'` - seconds

Sample:
```javascript
 format(new Date('1990/01/17 12:30:45'),'MM-DD-YY hh:mm:ss')
//  01-17-90 12:30:45
```

### - isEarlier()
Check if first parametr is earlier than second. When second parameter is not defined then function check if first parameter is earlier than today.

```javascript
isEarlier(firstDate, secondDate)
isEarlier(firstDate)
```

options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`) [optional]

Sample:
```javascript
 isEarlier(new Date(1990, 10, 17),new Date(1990,12,17))
 // true

 isEarlier(new Date(1990, 1, 17))
 // false
```

### - isLater()
Check if first parametr is later than second. When second parameter is not defined then function check if first parameter is later than today.

```javascript
isLater(firstDate, secondDate)
isLater(firstDate)
```

options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`) [optional]

Sample:
```javascript
 isLater(new Date(1990, 12, 17),new Date(1990, 10, 17))
 // true

 isLater(new Date(1990,1,17))
 // false
```

### - parseDate()

Parse string to date

```javascript
parseDate(date)
```

options:
- date - string (format: 'YYYY/MM/DD', 'DD/MM/YYYY', 'YYYY-MM-DD', 'DD-MM-YYYY')

Sample:
```javascript
 parseDate('2010/10/20')
```

### - sub()


```javascript
sub(firstDate, secondDate)
```
options:
- firstDate - date in javaScript (`new Date()`)
- secondDate - date in javaScript (`new Date()`)


Sample:
```javascript
 sub(new Date(1990,12,10),new Date(1990,12,10))
 // 0

 sub(new Date(1990,12,11),new Date(1990,12,10))
 // 86400000
```

result: number in miliseconds


### - isToday()


```javascript
isToday(date)
```
options:
- date - date in text in format `'YYYY/MM/DD'`


Sample:
```javascript
 isToday('1990/01/17')
 // false
```

result: true or false

### - isValidDate()


```javascript
isValidDate(date)
```
options:
- date - date in text in format `'YYYY/MM/DD'`


Sample:
```javascript
 isValidDate('1990/01/17')
 // true

 isValidDate('1990-01-17')
 // false

 isValidDate('2020/03/32')
 // false
```

result: true or false

### - duration()


```javascript
duration(msValue, date)
```
options:
- msValue - value in miliseconds
- date - date in javaScript (`new Date()`) [optional]


Sample:
```javascript
 duration(360000)
 //{ day: 0, hour: 0, min: 6, sec: 0, ms: 0 }
```
```javascript
 duration(360000, new Date('1990/01/17 10:00'))
 //{ day: 0, hour: 0, min: 6, sec: 0, ms: 0, year: 0, month: 0 }
```

result: object with value of days, months, years, minutes, hours, seconds and miliseconds