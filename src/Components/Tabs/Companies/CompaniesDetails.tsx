import { Button } from "@mui/joy";
import { Company } from "./Companies"
import { AccountBalance, Add, AlternateEmail, Phone } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


export function CompaniesDetails() {
    const c = new Company()
    c.INS_COMPANY_NAME = "Армеец"
    c.INS_COMPANY_ADDR = "България, София, бул. „Джеймс Баучер“ №51"
    c.INS_COMPANY_BULSTAT = "981273238"
    c.INS_COMPANY_CONTACT = "office@armeec.bg"
    c.INS_COMPANY_TEL = "+359 (0)700 1 3939"

    const products = [
        { name: 'Продукт 1', obj: 'Живот'},
        { name: 'Продукт 2', obj: 'Имот'},
        { name: 'Продукт 3', obj: 'Имот'},
        { name: 'Продукт 4', obj: 'Живот'},
    ]

    const n = useNavigate()

    return (
        <>
         <div className="sm:w-[1000px] h-[500px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-sky-900 pt-4">{c.INS_COMPANY_NAME}</h1>
                    <div className="text-stone-600 font-light text-sm">{c.INS_COMPANY_ADDR}</div>
                </div>
                <div className="flex gap-8 mt-6 w-[80%] m-auto justify-center">
                    <div className="flex gap-2">
                        <Phone className="text-sky-900"/>
                        <a href={"tel: " + c.INS_COMPANY_TEL} className="underline">{c.INS_COMPANY_TEL}</a>
                    </div>
                    <div className="flex gap-2">
                        <AlternateEmail className="text-sky-900"/>
                        <a href={"mailto: " + c.INS_COMPANY_CONTACT} className="underline">{c.INS_COMPANY_CONTACT}</a>
                    </div>
                    <div className="flex gap-2">
                        <AccountBalance className="text-sky-900"/>
                        <div>{c.INS_COMPANY_BULSTAT}</div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex mt-10 mb-2 gap-4">
                        <h1 className="text-lg font-bold">Застрахователни продукти</h1>
                        <Button variant="solid" sx={{ backgroundColor: 'rgb(12 74 110)', padding: '0 10px'}} onClick={() => n('../../products/add')}><Add /></Button>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <th className="bg-sky-900 text-white p-2 rounded-tl-md text-left">Име</th>
                                <th className="bg-sky-900 text-white p-2 rounded-tr-md text-left">Обект</th>
                            </thead>
                            <tbody>
                                {products.map((p, i) => {
                                    return <tr 
                                        className={"transition-all duration-200 hover:translate-x-1 " + (i % 2 == 0 ? 'bg-slate-300' : 'bg-slate-200')}>
                                        <td className="w-[160px] px-2 p-1">{p.name}</td>
                                        <td className="w-[160px] px-2 p-1">{p.obj}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}