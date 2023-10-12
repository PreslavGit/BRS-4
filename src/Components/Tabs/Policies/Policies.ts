export class Policy {
    POLICY_ID!: number
    POLICY_NO!: string
    POLICY_DATE!: string
    POLICY_BEGIN_DATE!: string
    POLICY_END_DATE!: string
    INS_PROD_CODE!: number
    INS_OBJECT_TYPE_ID!: number
    CLIENT_ID!: number
    OBJECT_DESCRIPTION!: string
    POLICY_ACTIVE!: boolean
    POLICY_SUM!: number
    POLICY_PREMIA!: number
    POLICY_TAX!: number
    POLICY_INS_COMISS?: number
    POLICY_NOTE?: string
}