import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>zzid list</h1>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/zzid">
                <a>zzid listing</a>
            </Link>
        </nav>
    );
};

export default Navbar;
