//

import Image from "next/image";
import styles from "@/styles/Works.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((work) => {
    return {
      params: { id: work.id },
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
    props: { work: data },
  };
};

const Details = ({ work }) => {
  return (
    <div className={styles.singleItem}>
      <h1>{work.name}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={`${work.image}`}
          alt={`${work.name}`}
          width="150"
          height="150"
          Layout="resposive"
          objectFit="cover"
        />
      </div>
      <div>
        <p>{work.desc}</p>
      </div>
    </div>
  );
};
export default Details;

// ============================================================================

// import Image from "next/image";
// import styles from "@/styles/Works.module.css";
// import { useRouter } from "next/router";

// const Details = ({ work }) => {
//   const router = useRouter();
//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.singleItem}>
//       <h1>{work.name}</h1>
//       <div className={styles.imageContainer}>
//         <Image
//           src={`${work.image}`}
//           alt={`${work.name}`}
//           width="150"
//           height="150"
//           Layout="responsive"
//           objectFit="cover"
//         />
//       </div>
//       <div>
//         <p>{work.desc}</p>
//       </div>
//     </div>
//   );
// };

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/items");
//   const data = await res.json();

//   const paths = data.map((work) => {
//     return {
//       params: { id: work.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await fetch(`http://localhost:5000/items/${params.id}`);
//   const data = await res.json();

//   return {
//     props: { work: data },
//   };
// };

// export default Details;
