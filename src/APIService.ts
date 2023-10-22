import { GET } from "./FetchWrapper";
import { Company } from "./Components/Tabs/Companies/Companies";

export async function getCompanies(){
    return await GET<Company[]>('/brokers/broker.php', undefined, '/companies')
}

export async function getCompanyById(id: number){
    return await GET<Company[]>('/brokers/broker.php?filtered=true&id=' + id, undefined, '/companies')
}