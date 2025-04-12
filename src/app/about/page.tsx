import Image from "next/image";
import styles from "src/app/page.module.css";
import { Header } from "src/app/components/Header/Header";
import { HeadLine } from "src/app/components/HeadLine/HeadLine";
import { Main } from "src/app/components/Main/Main";
import { Links } from "src/app/components/Links/Links";
import { Footer } from "src/app/components/Footer/Footer";

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header
        />
        <HeadLine
          title="About Page"
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
          fileName="src/app/about/page.tsx"
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
