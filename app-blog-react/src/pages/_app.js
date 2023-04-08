
import Head from "next/head"
import Script from 'next/script'
import Nav from "../components/Nav"
import SideContact from "../components/SideContact"
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
      
      
      <Component {...pageProps} className="z-0" />
    </div>
  </>)
}