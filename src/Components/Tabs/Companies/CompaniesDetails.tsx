import { useState, useEffect } from "react";
import { DataTable, TableHeader } from "../../DataTable";
import { Product } from "../Products/Product"
import { Company } from "./Companies"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getProducts } from "../../../APIService";


export function CompaniesDetails() {
    const c = new Company()
    c.INS_COMPANY_NAME = "TestName"
    c.INS_COMPANY_BULSTAT = "123456789"
    c.INS_COMPANY_ADDR = "Bulgaria, Sofia"
    c.INS_COMPANY_CONTACT = "testName@v.bg"
    c.INS_COMPANY_TEL = "015487346"
    const type: Partial<Product>[] = [
        { INS_PROD_NAME: "Продукт 1" },
        { INS_PROD_NAME: "Продукт 2" },
        { INS_PROD_NAME: "Продукт 3" }
    ]
    const headers: TableHeader<Product> = {
        INS_PROD_NAME: "Видове застохователни продукти"
    }
    const [tableData, setTableData] = useState<Product[]>()
    useEffect(() => {
        //getCompanyProduct(1)
        //  .then(res => { if (res) setTableData(res) })
        const p = new Product()
        p.INS_PROD_NAME = "Продукт 1"
        setTableData([p])
    }, [])

    return (
        <>
         <div className="sm:w-[1000px] h-[500px] p-4 rounded-xl border-blue-300 border-[1px] m-auto mt-12 bg-gradient-to-tl from-sky-50 to-sky-100 shadow-xl">
                <div className="w-full text-center text-3xl font-mono">{c.INS_COMPANY_NAME}</div>
                <div className="sm:w-[900px] p-6 rounded-xl border-blue-400 border-[2px] m-auto mt-5 mb-1">
                    <div className=""><ChevronRightIcon sx={{ marginRight: '6px' }} /> Булстат: {c.INS_COMPANY_BULSTAT} </div>
                    <div className=""><ChevronRightIcon sx={{ marginRight: '6px' }} /> Адрес: {c.INS_COMPANY_ADDR}</div>
                    <div className=""><ChevronRightIcon sx={{ marginRight: '6px' }} /> E-MAIL: {c.INS_COMPANY_CONTACT}</div>
                    <div className=""><ChevronRightIcon sx={{ marginRight: '6px' }} /> Телефон: {c.INS_COMPANY_TEL}</div>
                    <div className="flex justify-between">
                        <div className="min-w-[250px]">
                            <ChevronRightIcon sx={{ marginRight: '6px' }} />
                            Застрахователни продукти:
                        </div>
                        <div className="max-h-[250px] w-[350px] overflow-y-scroll overflow-x-hidden">
                            <DataTable data={tableData ?? []} headers={headers} tableName="" hideAction={true} addURL="../../products/add" fetcher={getProducts} />
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}