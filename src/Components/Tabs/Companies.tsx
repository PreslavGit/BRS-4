import { useState } from "react";
import { DataPageLayout } from "../DataPageLayout";
import { FormProps } from "../FormInput";
import { inputsToForm } from "../../helpers";

export function Companies(){
    const inputs: FormProps[] = [
        { name: 'name', label: 'Име'},
        { name: 'id', label: 'ID'}
    ]
    
    const [companiesFilterForm, setCompaniesFilterForm] = useState(inputsToForm(inputs))

    return (
        <>
            <DataPageLayout form={companiesFilterForm} setForm={setCompaniesFilterForm} formInputs={inputs} url="/brokers/broker.php"></DataPageLayout>
        </>
    )
}