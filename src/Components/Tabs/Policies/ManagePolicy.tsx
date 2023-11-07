import { Typography, Stack, Button } from "@mui/joy"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { POST, PUT } from "../../../FetchWrapper"
import { FormInput, FormProps, inputType as InputType } from "../../FormInput"
import { Policy } from "./Policies"
import { ConfirmModal } from "../../ConfirmModal"
import { getCompanies } from "../../../APIService"

const labels: Record<keyof Policy, string> = {
    POLICY_ID: 'ID',
    CLIENT_ID: 'Клиент ID',
    INS_OBJECT_TYPE_ID: 'Обект ID',
    INS_PROD_CODE: 'Koд на продукт',
    OBJECT_DESCRIPTION: 'Описания на обект',
    POLICY_ACTIVE: 'Активна',
    POLICY_BEGIN_DATE: 'Начална дата',
    POLICY_END_DATE: 'Крайна дата',
    POLICY_DATE: 'Дата на полица',
    POLICY_INS_COMISS: 'Комисионна',
    POLICY_NO: 'Номер на полица',
    POLICY_NOTE: 'Бележки',
    POLICY_PREMIA: 'Премия на полица',
    POLICY_SUM: 'Сума',
    POLICY_TAX: 'Такса'
}
export function ManagePolicy({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на полица'

    const [form, setForm] = useState(new Policy())
    const params = useParams()
    const [openConfirmModal, setConfirmModal] = useState(false);

    useEffect(() => {
        if(type === 'Edit'){
            // GET<Policy>(`/brokers/broker.php/company?filter=true&id=${params.id}`) 
            //     .then(res => { if(res) setForm(res) })
        }
    }, [])

    function handleSubmit(){
        if(type === 'Add'){
            POST('/companies/add', form)
        } else {
            PUT(`/companies/edit/${params.id}`, form)
        }
    }
    
    function getInputType(label: keyof Policy): InputType{
        switch (label) {
            case 'CLIENT_ID':
                return 'autocomplete'
            case 'INS_OBJECT_TYPE_ID':
                return 'autocomplete'
            case 'POLICY_ACTIVE':
                return 'checkbox'
            case 'POLICY_BEGIN_DATE':
                return 'date'
            case 'POLICY_END_DATE':
                return 'date'
            default:
                break;
        }
        return "text"
    }
    
    function getInputFetcher(label: keyof Policy): any{
        switch (label) {
            case 'CLIENT_ID':
                return getCompanies
            case 'INS_OBJECT_TYPE_ID':
                return getCompanies
            default:
                break;
        }
        return "text"
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Policy)[]).map((i, ind) => {
                    if((ind === 0 || i === 'POLICY_DATE' || i === 'POLICY_ACTIVE' || i === 'POLICY_NO') && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} type={getInputType(i)}
                            fetcher={getInputFetcher(i)} />
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