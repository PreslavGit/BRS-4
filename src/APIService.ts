import { GET } from "./FetchWrapper";
import { Company } from "./Components/Tabs/Companies/Companies";
import { Product } from "./Components/Tabs/Products/Product";

export async function getCompanies(){
    return await GET<Company[]>('/brokers/broker.php', undefined, '/companies')
}

export async function getCompanyById(id: number){
    return await GET<Company[]>('/brokers/broker.php?filtered=true&id=' + id, undefined, '/companies')
}
export async function getCompanyProduct(id: number){
    return await GET<Product[]>('/products/product.php?filtered=true&id=' + id, undefined, '/products')
}