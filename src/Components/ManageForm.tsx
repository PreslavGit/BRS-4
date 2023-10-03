import { Button, Stack, Typography } from "@mui/joy"
import { FormInput, FormProps } from "./FormInput"
import { useState } from "react"
import { inputsToForm } from "../helpers"

type props<T> = {
    Entity: new () => T
    labels: Record<keyof T, string>
}

export function ManageForm<T>({ Entity, labels }: props<T>) {
    const e = new Entity()
    const inputs: FormProps[] = Object.keys(e as any).map(i => {
        return { name: i, label: labels[i as keyof T]} 
    })
     
    const formInit = inputsToForm(inputs, { 'INS_COMPANY_NAME': 'Some name' })
    const [form, setForm] = useState(formInit)
    
    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px]">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>Добавяне на компания</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {inputs.map(i => {
                    return <FormInput form={form} label={i.label} name={i.name} setForm={setForm} key={i.name}/>
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={() => console.log(form)}>Добавяне</Button>
            </div>
        </div>
    )
}