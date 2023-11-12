import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput, inputType } from "../../FormInput"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { Client } from "./Clients"
import { ConfirmModal } from "../../ConfirmModal"

const labels: Record<keyof Client, string> = {
    CLIENT_ID: 'ID',
    CLIENT_FULLNAME: 'Име',
    CLIENT_EGN_BULSTAT: 'ЕГН/БУЛСТАТ',
    EMAIL: 'E-mail',
    CLIENT_TYPE: 'Физическо лице',
    TELEPHONE: 'Телефон',
    ADRESS_TEXT: 'Адрес',
    CLIENT_NOTE: 'Бележки',
}


export function ManageClient({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на клиент'

    const [form, setForm] = useState(new Client())
    const params = useParams()
    const [openConfirmModal, setConfirmModal] = useState(false);
    const n = useNavigate()

    useEffect(() => {
        if(type === 'Edit'){
            GET<Client>(`/clients/client.php/client?filter=true&id=${params.id}`) 
                .then(res => { if(res) setForm(res) })
        }
    }, [])

    function handleSubmit(){
        form.CLIENT_TYPE = (form.CLIENT_TYPE ? 1 : 0) as any
        if(type === 'Add'){
            POST('/clients/client.php', form, () => n('/clients') )
        } else {
            PUT(`/clients/client.php`, form,  () => n('/clients') )
        }
    }

    function getInputType(label: keyof Client): inputType{
        switch (label) {
            case 'CLIENT_TYPE':
                return 'checkbox'
            default:
                return 'text';
        }
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
            <Typography level="h2" sx={{ margin: '10px', marginBottom: '20px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Client)[]).map((i, ind) => {
                    if(ind === 0 && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} 
                        type={getInputType(i)} disabled={i === 'CLIENT_ID'}
                    />
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={() => setConfirmModal(true)}>{actionLabel}</Button>
            </div>
            <ConfirmModal state={openConfirmModal} setState={setConfirmModal} type="Info"
                action={() => handleSubmit() as any} /> 
        </div>
    )
}