import { Add, Delete, Edit, MoreHoriz, Visibility } from "@mui/icons-material";
import { Button, Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem, Sheet, Table, Typography } from "@mui/joy";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfirmModal } from "./ConfirmModal";
import { DELETE } from "../FetchWrapper";
import { getId } from "../helpers";

export type TableHeader<T> = {
    [Prop in keyof Partial<T>]: string
}

type props<T> = {
    headers: TableHeader<T>
    data: T[]
    tableName: string
    url: string
    hideActions: boolean
}

export function DataTable<T>({ headers, data, tableName, url, hideActions }: props<T>) {
    const n = useNavigate()

    const [openDelModal, setOpenDelModal] = useState(false);
    let selectedItem: T | null

    return (
        <div className="w-full h-[60vh] mr-[10vw] max-w-[60vw]">
            <div className="w-full h-[7vh] pr-2 mb-[1vh] flex flex-row justify-between">
                <Typography level='h2'>{tableName}</Typography>
                <Button size="sm" variant="outlined" onClick={() => n('add')}>Добавяне <Add sx={{ marginLeft: '5px', }} /></Button>
            </div>
            <Sheet sx={{ height: '52vh', overflow: 'auto', borderRadius: 'sm' }}>
                <Table variant="outlined" hoverRow stickyHeader stripe={'odd'}>
                    <thead>
                        <tr className="h-[30px]">
                            <th className={`w-[50px] ${hideActions ? 'hidden' : ''}`} key={'actionHeader'}></th>
                            {Object.keys(headers).map(h => {
                                const key = h as keyof T;
                                return <th key={headers[key]} className="w-[150px]">{headers[key]}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {!!data.length ?
                            data.map((d, i) => {
                                return <tr key={`row-${i}`}>
                                    <td key={`data-${i}`} className={hideActions ? 'hidden' : ''}>
                                        <Dropdown onOpenChange={() => selectedItem = d}>
                                            <MenuButton slots={{ root: MoreHoriz }}>
                                            </MenuButton>
                                            <Menu size="sm" placement="left-end">
                                                <MenuItem color="primary">
                                                    <ListItemDecorator>
                                                        <Visibility />
                                                    </ListItemDecorator>{' '}
                                                    Преглед
                                                </MenuItem>
                                                <MenuItem onClick={() => n(`edit/${getId(d)}`)}>
                                                    <ListItemDecorator>
                                                        <Edit />
                                                    </ListItemDecorator>{' '}
                                                    Редактиране
                                                </MenuItem>
                                                <MenuItem color="danger" onClick={() => setOpenDelModal(true)}>
                                                    <ListItemDecorator>
                                                        <Delete />
                                                    </ListItemDecorator>{' '}
                                                    Изтриване
                                                </MenuItem>
                                            </Menu>
                                        </Dropdown>
                                    </td>
                                    {Object.keys(headers).map(h => {
                                        const key = h as keyof T;
                                        return <td key={`cell-${i}-${key as string}`}>{(d[key] as any) ? (d[key] as any) : '-----'}</td>
                                    })}
                                </tr>
                            }) :
                            <tr className="w-full text-center">
                                <td colSpan={Object.keys(headers).length + 1}><Typography level="h3">Няма намерени резултати</Typography></td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </Sheet>
            

            <ConfirmModal state={openDelModal} setState={setOpenDelModal} type="Warning"
                action={() => DELETE(url + '?id=' +  getId(selectedItem))} /> 

            <Outlet />
        </div>
    )
}