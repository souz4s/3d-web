import React from "react";
import { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  )
}

export default MyApp
