#vietnam-mobile-providers

## exports

- vietnamMobileProviders: list of vietnam providers
- method parseVietnamMobile(mobileNumber: string)
parse mobileNumber to `brand`, `mcc`, `mnc`, `num`, with `num` is all distributed network code and its block numbers

```javascript
const {vietnamMobileProviders, parseVietnamMobile} = require('vietnam-mobile-providers')

console.log(vietnamMobileProviders)

console.log(parseVietnamMobile('0919000999'))
/*
{
  brand: 'Vinaphone',
  mcc: '452',
  mnc: '02',
  num: [
    { code: '13', blocks: ['88'], m2m: true },
    { code: '81', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '82', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '83', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '84', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '85', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '88', blocks: ['6', '8', '9'] },
    // matched next line
    { code: '91', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { code: '94', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
  ]
}
 */
```
