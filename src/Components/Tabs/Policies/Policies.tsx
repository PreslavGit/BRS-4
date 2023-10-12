import { DataPageLayout } from "../../DataPageLayout"
import { TableHeader } from "../../DataTable"
import { FormProps } from "../../FormInput"
import { Policy } from "./Policies"

export function Policies(){
    const filterInputs: FormProps[] = [
        { name: 'id', label: 'Номер' },
        { name: 'startDate', label: 'Сключена след', type: 'date' },
        { name: 'endDate', label: 'Сключена преди', type: 'date' },
        { name: 'client', label: 'Клиент', type: 'autocomplete', sourceUrl: '/clients'},
        { name: 'productId', label: 'Продукт', type: 'autocomplete', sourceUrl: '/products' },
    ]

    const headers: TableHeader<Policy> = { 
        POLICY_ID: 'Номер', 
        CLIENT_ID: 'Клиентски номер',
        POLICY_ACTIVE: 'Активна'
    }        

    return (
        <DataPageLayout<Policy>  formInputs={filterInputs} url="/policies/policies.php"
            headers={headers} tableName="Полици"/>
    )
}