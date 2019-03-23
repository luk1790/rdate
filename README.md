# rDate
## Functions:

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