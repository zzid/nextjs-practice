import { Navbar, Footer } from "../components";

const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
