import { Diversity3, Logout, Menu, SupervisorAccount, TextSnippet } from "@mui/icons-material";
import { IconButton, List, ListItemButton, ModalClose, Typography } from "@mui/joy";
import Drawer from "@mui/joy/Drawer/Drawer";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
    function isHomePage(){
        return window.location.pathname === '/'
    }

    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>
            <IconButton variant="outlined" color="primary" onClick={() => setDrawerOpen(true)} sx={{ margin: '10px' }}>
                <Menu />
            </IconButton>
            <Drawer open={drawerOpen} size="sm" onClose={() => setDrawerOpen(false)} sx={{ display: 'flex', alignItems: 'left' }}>
                <div className="flex justify-center h-auto py-4">
                    <ModalClose id="close-icon" size="lg" />
                </div>
                <div className="flex flex-col justify-between h-[80vh] flex-auto">
                    <List component="nav" onClick={() => setDrawerOpen(false)} sx={{ paddingTop: '5vh' }} size="lg">
                        <NavLink to={`companies`}>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'left' }}>
                                Компании <Diversity3 sx={{marginLeft: '8px'}}/>
                            </ListItemButton>
                        </NavLink>
                        <NavLink to={`clients`}>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'left' }}>
                                Клиенти <SupervisorAccount sx={{marginLeft: '8px'}}/>
                            </ListItemButton>
                        </NavLink>
                        <NavLink to={`policies`}>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'left' }}>
                                Полици <TextSnippet sx={{marginLeft: '8px'}}/>
                            </ListItemButton>
                        </NavLink>
                    </List>
                    <IconButton variant="plain" color="danger" onClick={() => setDrawerOpen(true)} sx={{ margin: '10px' }}>
                        <NavLink to={`login`} onClick={() => localStorage.removeItem('logged')} className={'mr-4'}>Излизане</NavLink>
                        <Logout />
                    </IconButton>
                </div>
            </Drawer>

           {isHomePage() ? 
            <div className="w-full text-center pt-[20vh]">
                <div className="text-[58px] font-bold">Добре дошли!</div>
            </div> :
            <></>
            } 

            <Outlet />
        </>
    )
}