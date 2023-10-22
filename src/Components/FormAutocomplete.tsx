import { Autocomplete } from "@mui/joy"
import { useEffect, useState } from "react"
import { GET } from "../FetchWrapper"
import { getId } from "../helpers"
import { Company } from "./Tabs/Companies/Companies"

type props<T>= {
    fetcher: () => any,
    setState: React.Dispatch<any>
    state: T
    name: string
    label: string
    displayProp: keyof T
}

export function FormAutocomplete<T>({fetcher, state, setState, name, displayProp, label}: props<T>){
    const [options, setOptions] = useState<T[]>([])
    useEffect(() => {
        fetcher()
            .then((resp: any) => { if(resp) setOptions(resp) })
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