import "../assets/styles/index.scss";
import "normalize.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { rootReducer } from "@/app/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={rootReducer}>
      <Component {...pageProps} />
    </Provider>
  );
}
