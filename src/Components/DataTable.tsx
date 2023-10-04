import { Add, Delete, Edit, MoreHoriz, Visibility } from "@mui/icons-material";
import { Button, Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem, Sheet, Table, Typography } from "@mui/joy";
import { Outlet, useNavigate } from "react-router-dom";

export type TableHeader<T> = {
    [Prop in keyof T]: string
}

type props<T> = {
    headers: TableHeader<T>
    data: T[]
    tableName: string
}

export function DataTable<T>({ headers, data, tableName }: props<T>) {
    const n = useNavigate() 

    return (
        <div className="w-full h-[60vh] mr-[10vw]">
            <div className="w-full h-[7vh] pr-2 mb-[1vh] flex flex-row justify-between">
                <Typography level='h2'>{tableName}</Typography>
                <Button size="sm" variant="outlined" onClick={() => n('add')}>Добавяне <Add sx={{ marginLeft: '5px', }} /></Button>
            </div>
            <Sheet sx={{ height: '52vh', overflow: 'auto', borderRadius: 'sm' }}>
                <Table variant="outlined" hoverRow stickyHeader stripe={'odd'}>
                    <thead>
                        <tr className="h-[30px]">
                            <th className="w-[50px]" key={'actionHeader'}></th>
                            {Object.keys(headers).map(h => {
                                const key = h as keyof T;
                                return <th key={headers[key]} className="w-[150px]">{headers[key]}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => {
                            return <tr key={`row-${i}`}>
                                <td key={`data-${i}`}>
                                    <Dropdown>
                                        <MenuButton slots={{ root: MoreHoriz }}>
                                        </MenuButton>
                                        <Menu size="sm" placement="left-end">
                                            <MenuItem color="primary">
                                                <ListItemDecorator>
                                                    <Visibility />
                                                </ListItemDecorator>{' '}
                                                Преглед
                                            </MenuItem>
                                            {/* @ts-ignore  tries to get id prop*/}
                                            <MenuItem onClick={() => n(`edit/${d[Object.keys(d)[0]]}`)}>
                                                <ListItemDecorator>
                                                    <Edit />
                                                </ListItemDecorator>{' '}
                                                Редактиране
                                            </MenuItem>
                                            <MenuItem color="danger">
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
                        })}
                    </tbody>
                </Table>
            </Sheet>
            <Outlet/>
        </div>
    )
}