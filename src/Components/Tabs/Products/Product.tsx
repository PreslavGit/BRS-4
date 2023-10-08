import { Product } from './Product'
import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { TableHeader } from "../../DataTable";

export function Products(){
    const filterInputs: FormProps[] = [
        { name: 'code', label: 'Код' },
        { name: 'name', label: 'Име' },
        { name: 'type', label: 'Тип' },
        { name: 'allowsCredit', label: 'Разсрочено палащане' },
        { name: 'prem', label: 'Процент на премия' },
        { name: 'commission', label: 'Процент комисия' },
        { name: 'companyId', label: 'Компания' },
    ]

    const headers: TableHeader<Product> = { 
        INS_COMPANY_ID: 'Номер', 
        INS_PROD_NAME: 'Име',
    }        

    return (
        <DataPageLayout<Product>  formInputs={filterInputs} url="/products/products.php"
            headers={headers} tableName="Продукти"/>
    )
}