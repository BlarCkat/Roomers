
import ClientOnly from "../components/clientOnly";
import Modal from "../components/modal/modal";
import NavBarComponent from "../components/nav/navbar";

export const metadata = {
    title: 'Roomers',
    description: 'Room renting and booking platform'
}

const LayoutView = ({children}:{children: React.ReactNode}) => {

    return ( 
        
        <html lang="en">
            <body>
                <ClientOnly>
                    <Modal isOpen title="Log In"/>
                    <NavBarComponent/>
                </ClientOnly>
                {children}
            </body>
        </html>
     );
}
 
export default LayoutView;