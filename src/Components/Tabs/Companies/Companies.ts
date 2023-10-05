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