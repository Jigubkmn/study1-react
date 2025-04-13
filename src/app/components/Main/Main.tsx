"use client"

import { useEffect } from "react";
// import { useCallback, useEffect } from "react";

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}

export function Main({listFirst, fileName, listSecond} :Props) {
  // ページ遷移時に再描画される。
  // 品質が少し落ちる
  // const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
  //   console.log(e.target);
  //   e.preventDefault()
  // }, []);

  useEffect(() => {
    document.body.style.background = "lightblue"
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
    {/* <button
      onClick={function() {
        alert(123)
      }}
    >
      ボタン</button> */}
    {/* <a
      href="/about"
      // onClick={handleClick}
      onClick={handleClick}
    >
      ボタン
    </a> */}
    </div>
  );
}
