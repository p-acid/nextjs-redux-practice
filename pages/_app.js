import { wrapper } from "../redux/store";
import GlobalStyle from "../style/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
export default wrapper.withRedux(MyApp);
