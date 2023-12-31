import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput } from "../../FormInput"
import { Company } from "./Companies"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { getCompanyById } from "../../../APIService"
import { ConfirmModal } from "../../ConfirmModal"

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

    const n = useNavigate()
    const [form, setForm] = useState(new Company())
    const params = useParams()
    const [openConfirmModal, setConfirmModal] = useState(false);

    useEffect(() => {
        if(type === 'Edit' && params.id){
            getCompanyById(Number(params.id)) 
                .then(res => { if(res) setForm(res[0]) })
        }
    }, [])

    function handleSubmit(){
        if(type === 'Add'){
            POST('/brokers/broker.php', form, () => n('/companies'))
        } else {
            PUT(`/brokers/broker.php`, form, () => n('/companies'))
        }
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
            <Typography level="h2" sx={{ margin: '10px', marginBottom: '20px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Company)[]).map((i, ind) => {
                    if(ind === 0 && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i}
                                disabled={i === 'INS_COMPANY_ID'}
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