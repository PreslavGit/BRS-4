import { GET } from "./FetchWrapper";
import { Company } from "./Components/Tabs/Companies/Companies";
import { Client } from "./Components/Tabs/Clients/Clients";
import { ObjectType } from "./Components/Tabs/ObjectType/ObjectType";

export async function getCompanies(){
    return await GET<Company[]>('/brokers/broker.php', undefined, '/companies')
}

export async function getCompanyById(id: number){
    return await GET<Company[]>('/brokers/broker.php?filtered=true&id=' + id, undefined, '/companies')
}

export async function getClients(){
    const clients: Client[] = [
        { CLIENT_ID: 1, CLIENT_FULLNAME: 'Клиент Едно' },
        { CLIENT_ID: 2, CLIENT_FULLNAME: 'Клиент Две' },
        { CLIENT_ID: 3, CLIENT_FULLNAME: 'Клиент Три' },
    ] as Client[]
    return clients
}

export async function getObjectTypes(){
    const clients: ObjectType[] = [
        { INS_OBJECT_TYPE_ID: 1, INS_OBJECT_TYPE_NAME: 'Имот' },
        { INS_OBJECT_TYPE_ID: 2, INS_OBJECT_TYPE_NAME: 'Живот' },
    ]
    return clients
}