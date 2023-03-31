
import Head from "next/head"

import Nav from "../components/Nav"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title> Zach </title>
      <link rel="icon" href="./zt-logo.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      
    </Head>
    <div className="bg-img">
    
      <Nav />
      <Component {...pageProps} />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
    </div>
  </>)
}