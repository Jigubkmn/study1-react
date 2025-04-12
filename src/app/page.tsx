import Image from "next/image";
import styles from "./page.module.css";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer/Footer";
import { HeadLine } from "./components/HeadLine";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header
        />
        <HeadLine
          title="Index Page"
        />
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Main
          listFirst="Get started by editing"
          fileName="src/app/page.tsx"
          listSecond="Save and see your changes instantly."
        />
        <Links
        />
        <Footer
        />
      </main>
    </div>
  );
}
