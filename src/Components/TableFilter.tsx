import { Button, Card, Divider, Stack, Typography } from "@mui/joy"
import { FormInput, FormProps } from "./FormInput"
import { Search } from "@mui/icons-material"
import { GET, POST } from "../FetchWrapper"
import { appendQueryParams } from "../helpers"

type props = {
    formInputs: FormProps[]
    form: any
    setForm: any
    url: string
}

export function TableFilter({ formInputs, form, setForm, url }: props) {

    function clearForm(){
        for (const input in form) {
            form[input] = ''
        }
        setForm(structuredClone(form))
    }

    async function getFiltered(){
        await GET(appendQueryParams(url, form))
    }

    return (
        <Card sx={{ width: '280px', height: '60vh', padding: '10px', margin: 'auto'}} color="primary">
            <Typography level="h4" textAlign='center'>Filters</Typography>
            <Divider />
            <div className="overflow-y-scroll h-full flex flex-col">
                <Stack sx={{ height: '100%', maxWidth: '200px', margin: 'auto', marginTop: '10px' }} spacing={2}>
                    {formInputs.map(i => {
                        return <FormInput name={i.name} label={i.label} form={form} setForm={setForm} />
                    })}
                </Stack>
                <div className="flex justify-center gap-2 mb-4">
                    <Button variant="outlined" color="neutral" onClick={clearForm}>Clear</Button>
                    <Button variant="solid" color="primary" onClick={getFiltered}>Filter<Search sx={{ marginLeft: '6px'}}/></Button>
                </div>
            </div>
        </Card>
    )
}