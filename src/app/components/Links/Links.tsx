import Image from "next/image";
import styles from "src/app/page.module.css";

const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Deploy now",
    styles: "styles.primary"
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    title: "Read our docs",
    styles: "styles.secondary"
  }
];

export function Links() {
  return (
    <div className={styles.ctas}>
      {ITEMS.map(item => {
        return (
          <a
            className={styles.primary}
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logoMark"
              width={20}
              height={20}
            />
            {item.title}
          </a>
        );
      })}
    </div>
  );
}
