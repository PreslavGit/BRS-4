import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { Company } from "./Companies";
import { TableHeader } from "../../DataTable";
import { getCompanies } from "../../../APIService";

export function Companies() {
    const filterInputs: FormProps[] = [
        { name: 'name', label: 'Име' },
        { name: 'id', label: 'ID' },
        { name: 'bulstat', label: 'БУЛСТАТ' },
        { name: 'insuranceType', label: 'Вид застаховка', type: 'autocomplete', fetcher: getCompanies},
    ]

    const headers: TableHeader<Company> = { 
       // INS_COMPANY_ID: 'Номер', 
        INS_COMPANY_NAME: 'Име', 
        INS_COMPANY_BULSTAT: 'БУЛСТАТ', 
       // INS_COMPANY_TEL: 'Телефон'  
    }        

    return (
        <DataPageLayout<Company>  formInputs={filterInputs} url="/brokers/broker.php"
            headers={headers} tableName="Компании"/>
    )
}