import { Button, Card, Divider, Stack, Typography } from "@mui/joy"
import { FormInput, FormProps } from "./FormInput"
import { Search } from "@mui/icons-material"
import { GET } from "../FetchWrapper"
import { appendQueryParams, inputsToForm } from "../helpers"
import { useState } from "react"

type props = {
    formInputs: FormProps[]
    url: string
    fetcher: () => Promise<any>
    setData: React.Dispatch<any>
}

export function TableFilter({ formInputs, url, fetcher, setData }: props) {
    const formInit = inputsToForm(formInputs)
    const [form, setForm] = useState(formInit)

    async function clearForm() {
        const cleared: any= {}
        for (const input in form) {
            cleared[input] = ''
        }
        setForm(cleared)
        setData(await fetcher())
    }

    async function getFiltered() {
        setData(await GET(appendQueryParams(url, form)))
    }

    return (
        <Card sx={{ width: '280px', height: '60vh', padding: '10px', margin: 'auto', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }} color="primary">
            <Typography level="h4" textAlign='center'>Филтри</Typography>
            <Divider />
            <div className="overflow-y-scroll h-full flex flex-col">
                <Stack sx={{ height: '100%', maxWidth: '200px', margin: 'auto', marginTop: '10px' }} spacing={2}>
                    {formInputs.map(i => {
                        return <FormInput name={i.name} label={i.label} form={form} setForm={setForm} key={i.name} type={i.type} fetcher={i.fetcher} displayProp={i.displayProp}/>
                    })}
                </Stack>
            </div>
            <Divider />
            <div className="flex justify-center gap-2 my-4">
                <Button variant="outlined" color="neutral" onClick={clearForm}>Изчисти</Button>
                <Button variant="solid" color="primary" onClick={getFiltered}>Филтрирай<Search sx={{ marginLeft: '6px' }} /></Button>
            </div>
        </Card>
    )
}