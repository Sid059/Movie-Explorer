import { Outlet } from "react-router-dom";
import NavbarContainer from "../../common/Navbar/NavbarContainer";

export default function RootLayout(){
    return (
        <div className="min-h-screen flex flex-col bg-[#000000]">
            {/* Header */}
            <NavbarContainer />
            
            {/* Main Content - grows to fill available space */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>
            
            {/* Footer - will be created later */}
            {/* <Footer /> */}
        </div>
    )
}
