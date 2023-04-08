'use client';

import Image from "next/image";
import { BiUser } from "react-icons/bi";

const Avatar = () => {
    return ( 
        <>
        <BiUser/>
        {/* <Image className="rounded-full" height={30} width={30} src={'/'} alt="avatar-img"/> */}
        </>
     );
}
 
export default Avatar;