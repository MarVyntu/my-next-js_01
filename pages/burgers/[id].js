//

import Image from "next/image";
import styles from "@/styles/Burgers.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
// проставлені вручну обєкти виглядатимуть так  paths: [{ params: { id: 123 } }, { params: { id: 234 } }, { params: { id: 345 } }],

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data },
  };
};

const Details = ({ burger }) => {
  return (
    <div className={styles.singleItem}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width="150"
          height="150"
          Layout="resposive"
          objectFit="cover"
        />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  );
};
export default Details;

// console.log("details burger >>>", burger);
