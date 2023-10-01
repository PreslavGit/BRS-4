export class CompanyFilter{
    id?: number
    name?: string
    bulstat?: string
    // TODO: type of insurance
}

export class Company{
    id!: number
    name!: string
    bulstat!: string
    address?: string
    contact?: string
    telephone?: string
}

export const companiesMock: Company[] = [
    { id: 1, bulstat: 'company_bulstat', name: 'COMPANY_NAME', address: 'company_name', contact: 'mail@mail.com', telephone: '072349243' },
    { id: 2, bulstat: 'company_bulstat2', name: 'COMPANY_NAME2' },
    { id: 3, bulstat: 'company_bulstat3', name: 'COMPANY_NAME3' },
    { id: 1, bulstat: 'company_bulstat', name: 'COMPANY_NAME', address: 'company_name', contact: 'mail@mail.com', telephone: '072349243' },
    { id: 2, bulstat: 'company_bulstat2', name: 'COMPANY_NAME2' },
    { id: 3, bulstat: 'company_bulstat3', name: 'COMPANY_NAME3' },
    { id: 1, bulstat: 'company_bulstat', name: 'COMPANY_NAME', address: 'company_name', contact: 'mail@mail.com', telephone: '072349243' },
    { id: 2, bulstat: 'company_bulstat2', name: 'COMPANY_NAME2' },
    { id: 3, bulstat: 'company_bulstat3', name: 'COMPANY_NAME3' },
    { id: 1, bulstat: 'company_bulstat', name: 'COMPANY_NAME', address: 'company_name', contact: 'mail@mail.com', telephone: '072349243' },
    { id: 2, bulstat: 'company_bulstat2', name: 'COMPANY_NAME2' },
    { id: 3, bulstat: 'company_bulstat3', name: 'COMPANY_NAME3' },
]