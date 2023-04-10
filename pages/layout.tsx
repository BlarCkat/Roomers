
import ClientOnly from "../components/clientOnly";
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
                    <NavBarComponent/>
                </ClientOnly>
                {children}
            </body>
        </html>
     );
}
 
export default LayoutView;