# rDate
## List of functions:
+ [format](#--format)
+ [isEarlier](#--isEarlier)
+ [parseDate](#--parseDate)
+ [sub](#--sub)
+ [isToday](#--isToday)
+ [isValidDate](#--isValidDate)

## Functions
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

Sample:
```javascript
 format(new rDate([10, 12, 1990]),'MM-DD-YY')
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
 format(new rDate([17, 10, 1990]),new rDate([17, 12, 1990]))

 format(new rDate([17, 1, 1990]))
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
 sub(new rDate([10, 12, 1990]),new rDate([10, 12, 1990]))
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
```

result: true or false