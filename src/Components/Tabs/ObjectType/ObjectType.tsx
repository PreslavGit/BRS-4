import { DataPageLayout } from "../../DataPageLayout";
import { FormProps } from "../../FormInput";
import { TableHeader } from "../../DataTable";
import { Type } from "./ObjectType";
import { getObjectTypes } from "../../../APIService";

export function ObjectType(){
    const filterInputs: FormProps[] = [
        { name: 'name', label: 'Име' },
        { name: 'id', label: 'ID' }
    ]

   const headers: TableHeader<Type> = {
    INS_OBJECT_TYPE_NAME: 'Име'
   }

   return (
    <DataPageLayout<Type> formInputs={filterInputs} url="/types/type.php" fetcher={getObjectTypes} headers={headers} tableName="Застахователни обекти"/> 
   )

}

