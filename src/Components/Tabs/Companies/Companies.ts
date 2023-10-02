export class CompanyFilter{
    id?: number
    name?: string
    bulstat?: string
    // TODO: type of insurance
}

export class Company{
    INS_COMPANY_ID!: number
    INS_COMPANY_NAME!: string
    INS_COMPANY_BULSTAT!: string
    INS_COMPANY_ADDR?: string
    INS_COMPANY_CONTACT?: string
    INS_COMPANY_TEL?: string
}

export const companiesMock: Company[] = [
    { INS_COMPANY_ID: 1, INS_COMPANY_BULSTAT: 'company_bulstat', INS_COMPANY_NAME: 'COMPANY_NAME', INS_COMPANY_ADDR: 'company_name', INS_COMPANY_CONTACT: 'mail@mail.com', INS_COMPANY_TEL: '072349243' },
    { INS_COMPANY_ID: 2, INS_COMPANY_BULSTAT: 'company_bulstat2', INS_COMPANY_NAME: 'COMPANY_NAME2' },
    { INS_COMPANY_ID: 3, INS_COMPANY_BULSTAT: 'company_bulstat3', INS_COMPANY_NAME: 'COMPANY_NAME3' },
    { INS_COMPANY_ID: 1, INS_COMPANY_BULSTAT: 'company_bulstat', INS_COMPANY_NAME: 'COMPANY_NAME', INS_COMPANY_ADDR: 'company_name', INS_COMPANY_CONTACT: 'mail@mail.com', INS_COMPANY_TEL: '072349243' },
    { INS_COMPANY_ID: 2, INS_COMPANY_BULSTAT: 'company_bulstat2', INS_COMPANY_NAME: 'COMPANY_NAME2' },
    { INS_COMPANY_ID: 3, INS_COMPANY_BULSTAT: 'company_bulstat3', INS_COMPANY_NAME: 'COMPANY_NAME3' },
    { INS_COMPANY_ID: 1, INS_COMPANY_BULSTAT: 'company_bulstat', INS_COMPANY_NAME: 'COMPANY_NAME', INS_COMPANY_ADDR: 'company_name', INS_COMPANY_CONTACT: 'mail@mail.com', INS_COMPANY_TEL: '072349243' },
    { INS_COMPANY_ID: 2, INS_COMPANY_BULSTAT: 'company_bulstat2', INS_COMPANY_NAME: 'COMPANY_NAME2' },
    { INS_COMPANY_ID: 3, INS_COMPANY_BULSTAT: 'company_bulstat3', INS_COMPANY_NAME: 'COMPANY_NAME3' },
    { INS_COMPANY_ID: 1, INS_COMPANY_BULSTAT: 'company_bulstat', INS_COMPANY_NAME: 'COMPANY_NAME', INS_COMPANY_ADDR: 'company_name', INS_COMPANY_CONTACT: 'mail@mail.com', INS_COMPANY_TEL: '072349243' },
    { INS_COMPANY_ID: 2, INS_COMPANY_BULSTAT: 'company_bulstat2', INS_COMPANY_NAME: 'COMPANY_NAME2' },
    { INS_COMPANY_ID: 3, INS_COMPANY_BULSTAT: 'company_bulstat3', INS_COMPANY_NAME: 'COMPANY_NAME3' },
]