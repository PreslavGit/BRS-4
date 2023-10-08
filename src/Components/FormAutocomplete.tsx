import { Autocomplete } from "@mui/joy"
import { useEffect, useState } from "react"
import { GET } from "../FetchWrapper"
import { getId } from "../helpers"

type props<T>= {
    url: string,
    setState: React.Dispatch<any>
    state: T
    name: string
}

export function FormAutocomplete<T>({url, state, setState, name}: props<T>){
    const [options, setOptions] = useState<T[]>([])

    useEffect(() => {
        GET<T[]>(url)
            .then(resp => { if(resp) setOptions(resp) })
    }, [])

    return (
        <>
        {/* @ts-ignore */}
            <Autocomplete options={options} onChange={(e, v) => setState({...state, [name]: getId(v) })} getOptionLabel={option => option[Object.keys(option)[0]]}/>
        </>
    )
}