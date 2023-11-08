import { Product } from './Product'
import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { TableHeader } from "../../DataTable";
import { getCompanies, getInsurances, getProducts } from '../../../APIService';

export function Products(){
    const filterInputs: FormProps[] = [
        { name: 'code', label: 'Код' },
        { name: 'name', label: 'Име' },
        { name: 'type', label: 'Вид застраховка',type: 'autocomplete', fetcher: getInsurances, displayProp: 'INS_TYPE_NAME' },
        { name: 'allowsCredit', label: 'Разсрочено палащане', type: 'checkbox' },
        { name: 'prem', label: 'Процент на премия' },
        { name: 'commission', label: 'Процент комисия' },
        { name: 'companyId', label: 'Компания', type: 'autocomplete', fetcher: getCompanies, displayProp: 'INS_COMPANY_NAME'},
    ]

    const headers: TableHeader<Product> = { 
        INS_COMPANY_ID: 'Компания', 
        INS_PROD_NAME: 'Продукт',
    }        

    return (
        <DataPageLayout<Product>  formInputs={filterInputs} fetcher={getProducts} url="/products/products.php"
            headers={headers} tableName="Продукти"/>
    )
}