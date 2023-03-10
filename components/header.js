import Link from "next/link";
// import { FaHamburger } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div>
        <Image src="/logoM8.png" alt="prayer" width={50} height={50} />
        {/* <FaHamburger /> */}
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/burgers">My Works</Link>
      </nav>
    </header>
  );
};

export default Header;
