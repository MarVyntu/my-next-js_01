import Link from "next/link";

// Ще додам хуки, для переходу, з сторінки 404, на головну, з затримкою 3s
import { useEffect } from "react";
import { useRouter } from "next/router";
// =================================================================

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Upsss...</h1>
      <h2>No such page found</h2>
      <p>
        Return to the <Link href="/">main page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
