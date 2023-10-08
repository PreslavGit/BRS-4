import { Autocomplete, Button, Stack, Typography } from "@mui/joy"
import { FormInput, FormProps } from "./FormInput"
import { useState } from "react"
import { inputsToForm } from "../helpers"
import { FormAutocomplete } from "./FormAutocomplete"

type defaults<T> =  Partial<Record<keyof T, string>>

type selects<T> = {
    prop: keyof T,
    url: string
}

type props<T> = {
    Entity: new () => T
    labels: Record<keyof T, string>
    caption: string
    actionLabel: string
    selects?: selects<T>[]
}

function ManageForm<T>({ Entity, labels, caption, actionLabel, selects }: props<T>) {
    const e = new Entity()
    const inputs: FormProps[] = Object.keys(e as any).map(i => {
        return { name: i, label: labels[i as keyof T]} 
    })

    // TODO: get defaults if route id(edit mode)
    const [form, setForm] = useState(() => inputsToForm(inputs))
    
    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {inputs.map((i, ind) => {
                    if(ind){
                        return selects?.map(s => s.prop).includes(i.name as keyof T) ?
                            <FormAutocomplete setState={setForm} state={form} name={i.name} url={selects.find(s => s.prop == i.name)?.url ?? ''} key={i.name} /> :
                            <FormInput form={form} label={i.label} name={i.name} setForm={setForm} key={i.name}/>
                    }
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={() => console.log(form)}>{actionLabel}</Button>
            </div>
        </div>
    )
}