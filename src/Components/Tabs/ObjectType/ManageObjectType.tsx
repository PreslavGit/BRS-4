import { useEffect, useState } from "react";
import { Type } from "./ObjectType";
import { useParams } from "react-router-dom";
import { Typography, Stack, Button } from "@mui/joy";
import { ConfirmModal } from "../../ConfirmModal";
import { FormInput } from "../../FormInput";
import { Company } from "../Companies/Companies";


const labels: Record<keyof Type, string> = {
    INS_OBJECT_TYPE_ID: 'ID',
    INS_OBJECT_TYPE_NAME: 'Обект'
}

export function ManageObjectType({ type }: { type: 'Add' | 'Edit' }) {
    let actionLabel = type === 'Edit' ? 'Редактиране' : 'Добавяне'
    let caption = actionLabel + ' на обекта'


    const [form, setForm] = useState(new Type())
    const params = useParams()
    const [openConfirmModal, setConfirmModal] = useState(false);

    return (
        <div className="sm:w-[600px] w-[300px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
        <Typography level="h2" sx={{ margin: '10px', marginBottom: '20px' }}>{caption}</Typography>
            <Stack spacing={2} direction="row" flexWrap="wrap" useFlexGap justifyContent={'center'}>
                {(Object.keys(labels) as (keyof Type)[]).map((i, ind) => {
                    if (ind === 0 && type === "Add") return null
                    return <FormInput form={form} label={labels[i]} name={i} setForm={setForm} key={i}
                        disabled={i === 'INS_OBJECT_TYPE_ID'}
                    />
                })}
            </Stack>
            <div className="w-full flex justify-center items-center mt-4">
                <Button onClick={() => setConfirmModal(true)}>{actionLabel}</Button>
            </div>
            <ConfirmModal state={openConfirmModal} setState={setConfirmModal} type="Info"
                action={() => [] as any}/>
        </div>
    )
}