import { Delete, Info, Warning } from "@mui/icons-material";
import { Modal, ModalDialog, DialogTitle, Divider, DialogContent, DialogActions, Button } from "@mui/joy";

type props = {
    state: boolean,
    setState: React.Dispatch<boolean>
    action: () => Promise<any>
    type?: 'Warning' | 'Info'
    msg?: string
}

export function ConfirmModal({ state, setState, action, type = 'Info', msg = 'Сигурни ли сте?' }: props) {

    function handleConfirm(){
        action()
        setState(false)
    }

    return (
        <Modal open={state} onClose={() => setState(false)}>
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    {type === 'Warning' ?
                        <Warning color="warning" /> :
                        <Info color="info" />
                    }
                    Подвърждение
                </DialogTitle>
                <Divider />
                <DialogContent>
                    {msg}
                </DialogContent>
                <DialogActions sx={{ paddingTop: 0}}>
                    <Button variant="solid" color={type === 'Warning' ? 'danger' : 'primary'} onClick={handleConfirm}>
                        Да
                    </Button>
                    <Button variant="plain" color="neutral" onClick={() => setState(false)}>
                        Отказ
                    </Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    )
}