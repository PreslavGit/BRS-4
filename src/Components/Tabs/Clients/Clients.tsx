import { DataPageLayout } from "../../DataPageLayout"
import { TableHeader } from "../../DataTable"
import { FormProps } from "../../FormInput"
import { Client } from "./Clients"

export function Clients(){
    const filterInputs: FormProps[] = [
        { name: 'id', label: 'ID' },
        { name: 'egn', label: 'ЕГН/БУЛСТАТ' },
        { name: 'type', label: 'Tип' },
        { name: 'name', label: 'Име' },
        { name: 'email', label: 'E-mail' },
        { name: 'telephone', label: 'Tелефон' },
    ]

    const headers: TableHeader<Client> = { 
        CLIENT_ID: 'ID',
        CLIENT_FULLNAME: 'Име',
        CLIENT_TYPE: 'Тип',
        EMAIL: 'E-mail',
        TELEPHONE: 'Телефон'
    }        

    return (
        <DataPageLayout<Client>  formInputs={filterInputs} url="/clients/client.php"
            headers={headers} tableName="Клиенти"/>
    )
}