import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
    //redirect if not logged
    return (
        <div className="flex">
            <div className="h-screen w-[140px] bg-slate-700 flex flex-col justify-between text-white gap-4">
                <div className="flex flex-col items-center">
                    <NavLink to={`clients`} className='w-full py-4 text-center hover:bg-slate-800 transition-all duration-[350ms]'>Clients</NavLink>
                    <NavLink to={`policies`} className='w-full py-4 text-center hover:bg-slate-800 transition-all duration-[350ms]'>Policies</NavLink>
                </div>
                <div className="flex flex-col items-center">
                    <NavLink to={`login`} className='w-full py-4 text-center hover:bg-slate-800 transition-all duration-[350ms]'>Logout</NavLink>
                </div>
            </div>

            <Outlet />
        </div>
    )
}