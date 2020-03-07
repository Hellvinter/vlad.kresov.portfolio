import React from "react";
import Head from "next/head";

import GlobalStyles from "../styles/global_styles";

import Navigation from "../components/generic_components/navigation";
import Introduction from "../components/professional_page_components/introduction";

function Home() {
  return (
    <div className="page-theme">
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <GlobalStyles />

      <header>
        <Navigation />
      </header>

      <main>
        <Introduction />
      </main>

      <style jsx>{`
        .page-theme {
          background-color: #08223b;
        }
      `}</style>
    </div>
  );
}
// Themes
// 143452
// 0a2742
// 08223b
export default Home;
