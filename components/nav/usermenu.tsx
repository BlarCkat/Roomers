'use client'

import { BiMenu } from "react-icons/bi";
import Avatar from "./avatar";
import { useCallback, useState } from "react";
import MenuItem from "./menuitem";

const UserMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    return ( 
        <>
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={()=> {}}>
                    Find your Home
                </div>
                <div onClick={toggleOpen} className="p-4 md:py-3 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-6 rounded-full cursor-pointer hover:shadow-md transition">
                    <BiMenu/>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                        <div className="flex flex-col cursor-pointer">
                            <MenuItem onClick={()=> {}} label="Login"/>
                        </div>
                    </div>
                </>
            )}
        </div>
        </>
     );
}
 
export default UserMenu;