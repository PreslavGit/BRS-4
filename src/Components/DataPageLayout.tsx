import { DataTable, TableHeader } from "./DataTable"
import { FormProps } from "./FormInput"
import { TableFilter } from "./TableFilter"

type props<T> = {
    form: any
    setForm: any
    formInputs: FormProps[]
    url: string
    headers: TableHeader<T>
    data: Array<T>
    tableName: string
}

export function DataPageLayout<T>({ form, setForm, formInputs, url, headers, data, tableName }: props<T>){
    return (
        <div className="flex flex-col sm:flex-row gap-12 sm:ml-12 mt-16">
            <TableFilter form={form} setForm={setForm} formInputs={formInputs} url={url}/>
            <DataTable headers={headers} data={data} tableName={tableName} />
        </div>
    )
}