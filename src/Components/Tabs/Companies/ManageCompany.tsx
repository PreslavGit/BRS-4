import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput } from "../../FormInput"
import { Company } from "./Companies"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useParams } from "react-router-dom"

const labels: Record<keyof Company, string> = {
    INS_COMPANY_ID: 'ID',
    INS_COMPANY_NAME: 'Име',
    INS_COMPANY_ADDR: 'Адрес',
    INS_COMPANY_BULSTAT: 'БУЛСТАТ',
    INS_COMPANY_CONTACT: 'Контакт',
    INS_COMPANY_TEL: 'Телефон'
}
export function ManageCompany({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на компания'

    const [form, setForm] = useState(new Company())
    const params = useParams()

    useEffect(() => {
        if(type === 'Edit'){
            GET<Company>(`/brokers/broker.php/company?filter=true&id=${params.id}`) 
                .then(res => { if(res) setForm(res) })
        }
    }, [])

    function handleSubmit(){
        console.log(form);
        if(type === 'Add'){
            POST('/companies/add', form)
        } else {
            PUT(`/companies/edit/${params.id}`, form)
        }
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Company)[]).map((i, ind) => {
                    if(ind === 0 && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} 
                                disabled={i === 'INS_COMPANY_ID'} 
                            />
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={handleSubmit}>{actionLabel}</Button>
            </div>
        </div>
    )
}