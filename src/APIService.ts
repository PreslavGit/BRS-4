import { GET } from "./FetchWrapper";
import { Company } from "./Components/Tabs/Companies/Companies";
import { Product } from "./Components/Tabs/Products/Product";
import { InsType } from "./Components/Tabs/InsType/InsType";
import { Client } from "./Components/Tabs/Clients/Clients";
import { Type } from "./Components/Tabs/ObjectType/ObjectType";
import { Policy } from "./Components/Tabs/Policies/Policies";


export async function getCompanies(){
    return await GET<Company[]>('/brokers/broker.php', undefined, '/companies')
}

export async function getInsurances(){
    //return await GET<InsType[]>('/type/type.php', undefined, '/companies')
    const type: InsType[] = [
        { 
            INS_TYPE_ID: 1,
            INS_TYPE_NAME: "Гражданска",
        },
        { 
            INS_TYPE_ID: 2,
            INS_TYPE_NAME: "Здравна",
        },
        { 
            INS_TYPE_ID: 3,
            INS_TYPE_NAME: "Живот",
        }
    ]
    return type
}
export async function getCompanyById(id: number){
    return await GET<Company[]>('/brokers/broker.php?filtered=true&id=' + id, undefined, '/companies')
}
export async function getCompanyProduct(id: number){
    return await GET<Product[]>('/products/product.php?filtered=true&id=' + id, undefined, '/products')
}

export async function getPolicies() {
    const policies = [
        { POLICY_ID: 1, CLIENT_ID: 52, POLICY_ACTIVE: true },
        { POLICY_ID: 2, CLIENT_ID: 43, POLICY_ACTIVE: false },
        { POLICY_ID: 3, CLIENT_ID: 6, POLICY_ACTIVE: true },
        { POLICY_ID: 4, CLIENT_ID: 91, POLICY_ACTIVE: true },
    ] as Policy[]
    return policies
}

export async function getClients(){
    const clients: Client[] = [
        { CLIENT_ID: 1, CLIENT_FULLNAME: 'Клиент Едно', CLIENT_TYPE: true, EMAIL: 'client@mail.bg', TELEPHONE: '088234817' },
        { CLIENT_ID: 2, CLIENT_FULLNAME: 'Клиент Две', CLIENT_TYPE: false, EMAIL: 'client_two@mail.com', TELEPHONE: '03249123'},
        { CLIENT_ID: 3, CLIENT_FULLNAME: 'Клиент Три', CLIENT_TYPE: true, EMAIL: 'client3@mail.uk', TELEPHONE: '01239238'},
    ] as Client[]
    return clients
}

export async function getProducts(){
    const prods: Product[] = [
        { INS_PROD_CODE: 1, INS_COMPANY_ID: 234098, INS_PROD_NAME: 'Продукт Едно' },
        { INS_PROD_CODE: 2, INS_COMPANY_ID: 975498, INS_PROD_NAME: 'Продукт Две' },
        { INS_PROD_CODE: 3, INS_COMPANY_ID: 102389, INS_PROD_NAME: 'Продукт Три' },
    ] as Product[]
    return prods
}

export async function getObjectTypes(){
    const objs: Type[] = [

        { INS_OBJECT_TYPE_ID: 1, INS_OBJECT_TYPE_NAME: 'Имот' },
        { INS_OBJECT_TYPE_ID: 2, INS_OBJECT_TYPE_NAME: 'Живот' },
        { INS_OBJECT_TYPE_ID: 3, INS_OBJECT_TYPE_NAME: 'Превозно средство' }
    ]
    return objs
}