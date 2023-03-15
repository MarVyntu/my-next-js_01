import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Header = () => {
  return (
    <>
      <Head>
        <title>4petals</title>
        <link rel="shortcut icon" href="/logoM8.png" type="image/png" />
      </Head>

      <header>
        <div>
          <Image src="/logoM8.png" alt="prayer" width={50} height={50} />
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About me</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/works">My Works</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
