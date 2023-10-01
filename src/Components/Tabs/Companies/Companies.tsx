import { useState } from "react";
import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { inputsToForm } from "../../../helpers";
import { Company, companiesMock } from "./Companies";
import { TableHeader } from "../../DataTable";

export function Companies() {
    const filterInputs: FormProps[] = [
        { name: 'name', label: 'Име' },
        { name: 'id', label: 'ID' }
    ]

    const [companiesFilterForm, setCompaniesFilterForm] = useState(inputsToForm(filterInputs))
    
    const headers: TableHeader<Company> = { id: 'Номер', name: 'Име', bulstat: 'БУЛСТАТ', telephone: 'Телефон'  }

    return (
        <DataPageLayout<Company> form={companiesFilterForm} setForm={setCompaniesFilterForm} formInputs={filterInputs} url="/brokers/broker.php"
            headers={headers} data={companiesMock} tableName="Компании"/>
    )
}