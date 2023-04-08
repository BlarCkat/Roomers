'use client'

import { BiMenu } from "react-icons/bi";
import Avatar from "./avatar";

const UserMenu = () => {
    return ( 
        <>
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer" onClick={()=> {}}>
                    Find your Home
                </div>
                <div className="p-4 md:py-3 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-6 rounded-full cursor-pointer hover:shadow-md transition">
                    <BiMenu/>
                <div className="hidden md:block">
                    <Avatar/>
                </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UserMenu;