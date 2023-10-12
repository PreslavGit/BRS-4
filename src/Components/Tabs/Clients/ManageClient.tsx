import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput } from "../../FormInput"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useParams } from "react-router-dom"
import { Client } from "./Clients"

const labels: Record<keyof Client, string> = {
    CLIENT_ID: 'ID',
    CLIENT_FULLNAME: 'Име',
    CLIENT_EGN_BULSTAT: 'ЕГН/БУЛСТАТ',
    CLIENT_TYPE: 'Тип',
    EMAIL: 'E-mail',
    TELEPHONE: 'Телефон',
    ADRESS_TEXT: 'Адрес',
    CLIENT_NOTE: 'Бележки',
}


export function ManageClient({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на клиент'

    const [form, setForm] = useState(new Client())
    const params = useParams()

    useEffect(() => {
        if(type === 'Edit'){
            GET<Client>(`/clients/client.php/client?filter=true&id=${params.id}`) 
                .then(res => { if(res) setForm(res) })
        }
    }, [])

    function handleSubmit(){
        console.log(form);
        if(type === 'Add'){
            POST('/clients/add', form)
        } else {
            PUT(`/client/edit/${params.id}`, form)
        }
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Client)[]).map((i, ind) => {
                    if(ind === 0 && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} 
                        disabled={i === 'CLIENT_ID'}
                    />
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={handleSubmit}>{actionLabel}</Button>
            </div>
        </div>
    )
}