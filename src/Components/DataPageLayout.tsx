import { FormProps } from "./FormInput"
import { TableFilter } from "./TableFilter"

type props = {
    form: any
    setForm: any
    formInputs: FormProps[]
    url: string
}

export function DataPageLayout({ form, setForm, formInputs, url }: props){
    return (
        <div className="flex flex-col sm:flex-row gap-12 sm:ml-12 mt-16">
            <TableFilter form={form} setForm={setForm} formInputs={formInputs} url={url}/>
            <div className="w-[66vw] h-[60vh] bg-blue-100"></div>
        </div>
    )
}