import { Outlet } from "react-router-dom";
import NavbarContainer from "../../common/Navbar/NavbarContainer";
import Footer from "../../common/Footer/Footer";

export default function RootLayout(){
    return (
        <div className="min-h-screen flex flex-col bg-[#000000]">
            <NavbarContainer />
            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
