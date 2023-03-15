//
import Link from "next/link";
import styles from "@/styles/Works.module.css";
import Image from "next/image";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { works: data },
  };
};

const Works = ({ works }) => {
  return (
    <div>
      <h1>Some of my works</h1>
      {works.map((work) => {
        return (
          <Link
            href={`/works/${work.id} `}
            key={work.id}
            className={styles.workCard}
          >
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
              <h3>{work.name}</h3>
              <p>{work.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Works;
