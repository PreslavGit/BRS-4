import { useEffect, useState } from "react"
import { GET } from "../FetchWrapper"
import { DataTable, TableHeader } from "./DataTable"
import { FormProps } from "./FormInput"
import { TableFilter } from "./TableFilter"

type props<T> = {
    form: any
    setForm: any
    formInputs: FormProps[]
    url: string
    headers: TableHeader<T>
    tableName: string
}

export function DataPageLayout<T>({ form, setForm, formInputs, url, headers, tableName }: props<T>){
    const [tableData, setTableData] = useState<T[]>()
    useEffect(() => {
        GET<T[]>(url)
            .then(res => { if (res) setTableData(res) })
    }, [])
    return (
        <div className="flex flex-col sm:flex-row gap-12 sm:ml-12 mt-16">
            <TableFilter form={form} setForm={setForm} formInputs={formInputs} url={url} setData={setTableData}/>
            <DataTable headers={headers} data={tableData ?? []} tableName={tableName} />
        </div>
    )
}