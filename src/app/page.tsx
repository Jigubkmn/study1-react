import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/app/components/Header/Header";
import { HeadLine } from "@/app/components/HeadLine/HeadLine";
import { Main } from "@/app/components/Main/Main";
import { Links } from "@/app/components/Links/Links";
import { Footer } from "@/app/components/Footer/Footer";

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
