export type VietnamMobileBrand =
| 'MobiFone'
| 'Vinaphone'
| 'Viettel Mobile'
| 'Vietnamobile'
| 'Gmobile'
| 'I-Telecom'
| 'REDDI'

export type VietnamDistributedMobile = {code: string, blocks: string[], m2m?: boolean}
export type VietnamMobileProvider = {
  brand: VietnamMobileBrand
  mcc: string
  mnc: string
}
// https://vnta.gov.vn/doanhnghiep/Trang/tintheochuyenmuc.aspx?chuyenMucID=3063
export const vietnamMobileProviders: (VietnamMobileProvider & {num: VietnamDistributedMobile[]})[] = [
  // {
  //   brand: 'S-Fone',
  //   mcc: '452',
  //   mnc: '03'
  // },
  // {
  //   brand: 'EVNTelecom',
  //   mcc: '452',
  //   mnc: '06'
  // },
  {
    brand: 'MobiFone',
    mcc: '452',
    mnc: '01',
    num: [
      { code: '70', blocks: ['2', '3', '4', '5', '6', '7', '8'] },
      { code: '76', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '77', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '78', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '79', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '89', blocks: ['6', '8', '9'] },
      { code: '90', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '93', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    ],
  },
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
      { code: '91', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '94', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    ]
  },
  {
    brand: 'Viettel Mobile',
    mcc: '452',
    mnc: '04',
    num: [
      { code: '16', blocks: ['997', '998', '999'], m2m: true },
      { code: '32', blocks: ['5', '6 ', '7', '8', '9'] },
      { code: '33', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '34', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '35', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '36', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '37', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '38', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '39', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '86', blocks: ['2', '5', '6', '7', '8', '9'] },
      { code: '96', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '97', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '98', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    ]
  },
  {
    brand: 'Vietnamobile',
    mcc: '452',
    mnc: '05',
    num: [
      { code: '52', blocks: ['2', '3', '8'] },
      { code: '56', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '58', blocks: ['2', '3', '4', '5', '6', '7', '8', '9'] },
      { code: '92', blocks: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    ]
  },
  {
    brand: 'Gmobile',
    mcc: '452',
    mnc: '07',
    num: [
      { code: '59', blocks: ['2', '3', '8', '9'] },
      { code: '99', blocks: ['3', '4', '5', '6', '7'] },
    ]
  },
  {
    brand: 'I-Telecom',
    mcc: '452',
    mnc: '08',
    num: [
      { code: '87', blocks: ['7', '9', '8'] }
    ]
  },
  {
    brand: 'REDDI',
    mcc: '452',
    mnc: '09',
    num: [
      { code: '55', blocks: ['9'] }
    ]
  }
]

export const parseVietnamMobile = (mobile: string): undefined|VietnamMobileProvider => {
  if (!/^\d+$/.test(mobile)) {
    throw new Error(`Invalid mobile: ${mobile}`)
  }
  mobile = mobile.replace(/^0+/g, '')
  if (mobile.length !== 9) {
    throw new Error(`Invalid mobile: ${mobile}`)
  }

  for (const provider of vietnamMobileProviders) {
    for (const { code, blocks } of provider.num) {
      if (mobile.startsWith(code)) {
        for (const block of blocks) {
          if (mobile.startsWith(block, code.length)) {
            return provider
          }
        }
      }
    }
  }
}
