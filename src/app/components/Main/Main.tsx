"use client"

import { useEffect, useState } from "react";

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}


export function Main({listFirst, fileName, listSecond} :Props) {
  const [foo, setFoo] = useState(1);

  const handleClick = () => {
    setFoo(function (foo) {
      return foo + 1;
    });
  };

  console.log(foo);


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
    <h1>{foo}</h1>
    <button
      onClick={handleClick}
    >
      ボタン
    </button>
    </div>
  );
}
