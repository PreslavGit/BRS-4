import { Typography, Stack, Button } from "@mui/joy"
import { useEffect, useState } from "react"
import { FormInput } from "../../FormInput"
import { GET, POST, PUT } from "../../../FetchWrapper"
import { useParams } from "react-router-dom"
import { Product } from "./Product"

const labels: Record<keyof Product, string> = {
    INS_COMPANY_ID: 'ID',
    INS_PROD_NAME: 'Име',
    INS_PROD_CODE: 'Код',
    INS_PROD_COMISS_PERC: 'Процент на комисия',
    INS_PROD_DEFERED: 'Разсрочено плащане',
    INS_PROD_PREM_PERC: 'Процент на премия',
    INS_TYPE_ID: 'Тип',
    MODIF_DATE: 'Дата на промяна'
}
export function ManageProduct({ type }: { type: 'Add' | 'Edit'}) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel +  ' на продукт'

    const [form, setForm] = useState(new Product())
    const params = useParams()

    useEffect(() => {
        if(type === 'Edit'){
            GET<Product>(`/products/products.php`) 
                .then(res => { if(res) setForm(res) })
        }
    }, [])

   function handleSubmit(){
        console.log(form);
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
        return 'text'
    }

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12">
            <Typography level="h3" sx={{ marginBottom: '10px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Product)[]).map((i, ind) => {
                    if((ind === 0 || i == 'MODIF_DATE') && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i} 
                                disabled={i === 'INS_COMPANY_ID' || i === 'MODIF_DATE'} type={getType(i)} 
                            />
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={handleSubmit}>{actionLabel}</Button>
            </div>
            {/* TODO add confirm modal on edit */}
        </div>
    )
}
