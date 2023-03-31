
import Nav from "../components/Nav"
import "../styles/global.css"

export default function MyApp({ Component, pageProps }) {
  return (<>
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  </>)
}