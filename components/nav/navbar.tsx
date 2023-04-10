'use clent';

import Container from "../container";
import Logo from "../logo/logo";
import Search from "../search/searchbar";
import UserMenu from "./usermenu";

const NavBarComponent = () => {
    return ( 
        <>
        <nav className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo/>
                        <Search/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </nav>
        </>
     );
}
 
export default NavBarComponent;