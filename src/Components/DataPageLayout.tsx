import { useEffect, useState } from "react"
import { DataTable, TableHeader } from "./DataTable"
import { FormProps } from "./FormInput"
import { TableFilter } from "./TableFilter"

type props<T> = {
    formInputs: FormProps[]
    url: string
    fetcher: () => Promise<any>
    headers: TableHeader<T>
    tableName: string
    hideActions?: boolean
    addURL?: string
}

export function DataPageLayout<T>({ formInputs, fetcher, url, headers, tableName, hideActions = false, addURL }: props<T>){
    const [tableData, setTableData] = useState<T[]>()
    useEffect(() => {
        fetcher()
            .then(res => { if (res) setTableData(res) })
    }, [])
    return (
        <div className="flex flex-col sm:flex-row gap-12 sm:ml-12 mt-16">
            <TableFilter formInputs={formInputs} url={url} fetcher={fetcher} setData={setTableData}/>
            <DataTable headers={headers} data={tableData ?? []} tableName={tableName} url={url} addURL={addURL}/>
        </div>
    )
}