import { Autocomplete } from "@mui/joy"
import { useEffect, useState } from "react"
import { GET } from "../FetchWrapper"
import { getId } from "../helpers"
import { Company } from "./Tabs/Companies/Companies"

type props<T>= {
    url: string,
    setState: React.Dispatch<any>
    state: T
    name: string
    label: string
    displayProp: keyof T
}

export function FormAutocomplete<T>({url, state, setState, name, displayProp, label}: props<T>){
    const [options, setOptions] = useState<T[]>([])
    const companies: Company[] = []
    const c1 = new Company()
    c1.INS_COMPANY_BULSTAT = '111'
    c1.INS_COMPANY_ID = 11
    c1.INS_COMPANY_NAME = 'Name One'
    companies.push(c1)
    const c2 = new Company()
    c2.INS_COMPANY_BULSTAT = '222'
    c2.INS_COMPANY_ID = 2
    c2.INS_COMPANY_NAME = 'Name Two'
    companies.push(c2)
    useEffect(() => {
        setOptions(companies as T[])
        // GET<T[]>(url)
        //     .then(resp => { if(resp) setOptions(resp) })
    }, [])

    return (
        <>
            <Autocomplete options={options} placeholder={label}
                onChange={(_, v) => setState({...state, [name]: getId(v) })} 
                getOptionLabel={option => option[displayProp] as string}
                sx={{ minHeight: '54px', width: '200px' }}
            />
        </>
    )
}