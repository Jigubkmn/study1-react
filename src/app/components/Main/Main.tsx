"use client"

import { useCallback, useEffect } from "react";

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}

export function Main({listFirst, fileName, listSecond} :Props) {
  // ページ遷移時に再描画される。
  // 品質が少し落ちる
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log(e.target);
    e.preventDefault()
  }, []);

  useEffect(() => {
    // Mainコンポーネントがレンダリングされる時に実行される。
    document.body.style.background = "lightblue"
    console.log("マウント時");

    return () => {
    console.log("アンマウント時");
    }
  }, [])

  return (
    <div>
      <ol>
      <li>
        {listFirst}
        <code>
          {fileName}
        </code>
        .
      </li>
      <li>
        {listSecond}
      </li>
    </ol>
    <a
      href="/about"
      // onClick={handleClick}
      onClick={handleClick}
    >
      ボタン
    </a>
    </div>
  );
}
