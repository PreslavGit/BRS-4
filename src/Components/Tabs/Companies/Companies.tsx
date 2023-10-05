import { useState } from "react";
import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { inputsToForm } from "../../../helpers";
import { Company } from "./Companies";
import { TableHeader } from "../../DataTable";

export function Companies() {
    const filterInputs: FormProps[] = [
        { name: 'name', label: 'Име' },
        { name: 'id', label: 'ID' },
        { name: 'bulstat', label: 'БУЛСТАТ' },
    ]

    const formInit = inputsToForm(filterInputs)
    const [companiesFilterForm, setCompaniesFilterForm] = useState(formInit)
    
    const headers: TableHeader<Company> = { INS_COMPANY_ID: 'Номер', INS_COMPANY_NAME: 'Име', INS_COMPANY_BULSTAT: 'БУЛСТАТ', INS_COMPANY_TEL: 'Телефон'  }

    return (
        <DataPageLayout<Company> form={companiesFilterForm} setForm={setCompaniesFilterForm} formInputs={filterInputs} url="/brokers/broker.php"
            headers={headers} tableName="Компании"/>
    )
}