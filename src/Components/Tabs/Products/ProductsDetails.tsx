import { Product } from "./Product";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export function ProductsDetails() {
    const p = new Product()
    p.INS_PROD_NAME = 'TestProduct',
    p.INS_PROD_CODE = 5,
    p.INS_PROD_COMISS_PERC = 3,
    p.INS_COMPANY_ID = 1,
    p.INS_PROD_DEFERED = true,
    p.INS_TYPE_ID=2
    return(
        <>
        <div className="min-w-[250px]">
                            <ChevronRightIcon sx={{ marginRight: '6px' }} />
                            Застрахователни продукти:
                        </div>
        </>
    )
}