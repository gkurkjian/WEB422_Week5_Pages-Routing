import "@/styles/globals.css";
//import LayoutLazy from "./components/1.LayoutsLazy";
import LayoutDynamic from "./components/2.LayoutDynamic";


export default function App({ Component, pageProps }) {
  return (
    <LayoutDynamic>
      <Component {...pageProps}/>
    </LayoutDynamic>
  )
}
