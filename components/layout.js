import Header from "./header";
import Footer from "./footer";

// Тут створюю шаблон для всіх сторінок з Header і Footer, де  {children} це наповнення кожної окремої сторінки
// Далі переходжу в _App.tsx, або _App.js, залежно від версії і огортаю ним <Component {...pageProps} />
// Тобто, передаю всі пропси між хедером і футером
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
