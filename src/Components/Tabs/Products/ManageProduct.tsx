import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput } from "../../FormInput"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useParams } from "react-router-dom"
import { Product } from "./Product"
import { ConfirmModal } from "../../ConfirmModal"
import { getCompanies, getInsurances } from "../../../APIService"

const labels: Record<keyof Product, string> = {
    INS_COMPANY_ID: 'Компаня',
    INS_PROD_NAME: 'Име',
    INS_PROD_CODE: 'Код',
    INS_PROD_COMISS_PERC: 'Процент на комисия',
    INS_PROD_DEFERED: 'Разсрочено плащане',
    INS_PROD_PREM_PERC: 'Процент на премия',
    INS_TYPE_ID: 'Вид застраховка',
    MODIF_DATE: 'Дата на промяна'
}
export function ManageProduct({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на продукт'

    const [form, setForm] = useState(new Product())
    const params = useParams()
    const [openConfirmModal, setConfirmModal] = useState(false);

    useEffect(() => {
        if(type === 'Edit'){
            GET<Product>(`/products/products.php`) 
                .then(res => { if(res) setForm(res) })
        } else {
            
        }
    }, [])

   function handleSubmit(){
        if(type === 'Add'){
            POST('/products/products.php', form)
        } else {
            PUT(`/products/products.php`, form)
        }
    }

    function getType(i: keyof Product){
        if(i === 'INS_PROD_DEFERED'){
            return 'checkbox'
        }
        if(i === 'MODIF_DATE'){
            return 'date'
        }
        if(i === 'INS_COMPANY_ID'){
            return 'autocomplete'
        }
        if(i === 'INS_TYPE_ID'){
            return 'autocomplete'
        }
        return 'text'
    }

    function getFetcher(label: keyof Product){
        switch (label) {
            case 'INS_COMPANY_ID':
                return getCompanies
            case 'INS_TYPE_ID':
                return getInsurances
            default:
                break;
        }
    }

    function getDisplayProp(label: keyof Product){
        switch (label) {
            case 'INS_COMPANY_ID':
                return 'INS_COMPANY_NAME'
            case 'INS_TYPE_ID':
                return 'INS_TYPE_NAME'
            default:
                return undefined;
        }
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
            <Typography level="h2" sx={{ margin: '10px', marginBottom: '20px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Product)[]).map((i, ind) => {
                    if((i == 'MODIF_DATE') && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} 
                                fetcher={getFetcher(i)} displayProp={getDisplayProp(i)} disabled={i === 'MODIF_DATE'} type={getType(i)} 
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
