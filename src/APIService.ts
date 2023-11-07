import { GET } from "./FetchWrapper";
import { Company } from "./Components/Tabs/Companies/Companies";
import { Product } from "./Components/Tabs/Products/Product";
import { InsType } from "./Components/Tabs/InsType/InsType";

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