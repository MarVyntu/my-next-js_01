import Head from "next/head";

const ReviewsPage = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Maryan Vyntu | Main </title>
        <meta name="title" content="reviews" />
      </Head>
      <div>
        <h1>Reviews</h1>
        <div className="reviews">
          {!!reviews.length &&
            reviews.map((res) => {
              return (
                <div key={res.id} className="review">
                  {res.id} {`${res.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

//  {`${res.body.slice(0, 90)}...`} вивід {`${відповідь.тілоВідповіді.обрізати(від0, до90символів)}...`}
// Аналогічно записую кількість коментарів, додаючи перед .map .slice(0, 20), без .slice(0, 20), отримаю всі комантарі з сервера

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default ReviewsPage;
