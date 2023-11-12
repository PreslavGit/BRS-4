export class ClientFilter {
    egn?: string
    bulstat?: string
    type?: boolean
    name?: string
    email?: string
    telephone?: string

}


export class Client {
    CLIENT_ID!: number
    CLIENT_TYPE!: number
    CLIENT_EGN_BULSTAT!: string
    CLIENT_FULLNAME!: string
    EMAIL?: string
    TELEPHONE?: string
    ADRESS_TEXT!: string
    CLIENT_NOTE?: string

}