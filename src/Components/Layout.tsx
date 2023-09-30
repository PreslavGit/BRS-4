import { Logout, Menu } from "@mui/icons-material";
import { IconButton, List, ListItemButton, ModalClose } from "@mui/joy";
import Drawer from "@mui/joy/Drawer/Drawer";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>
            <IconButton variant="outlined" color="primary" onClick={() => setDrawerOpen(true)} sx={{ margin: '10px' }}>
                <Menu />
            </IconButton>
            <Drawer open={drawerOpen} size="sm" onClose={() => setDrawerOpen(false)} sx={{ display: 'flex', alignItems: 'center' }}>
                <div className="flex justify-center h-auto py-4">
                    <ModalClose id="close-icon" size="lg" sx={{ right: 'inherit' }} />
                </div>
                <div className="flex flex-col justify-between h-[80vh] flex-auto">
                    <List component="nav" onClick={() => setDrawerOpen(false)} sx={{ paddingTop: '5vh' }} size="lg">
                        <NavLink to={`clients`}>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
                                Клиенти
                            </ListItemButton>
                        </NavLink>
                        <NavLink to={`policies`}>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
                                Полици
                            </ListItemButton>
                        </NavLink>
                    </List>
                    <IconButton variant="plain" color="danger" onClick={() => setDrawerOpen(true)} sx={{ margin: '10px' }}>
                        <NavLink to={`login`} className={'mr-4'}>Излизане</NavLink>
                        <Logout />
                    </IconButton>
                </div>
            </Drawer>
            <Outlet />
        </>
    )
}