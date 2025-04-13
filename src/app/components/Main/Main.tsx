"use client"

import { useCallback, useEffect, useState } from "react";

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}


export function Main({listFirst, fileName, listSecond} :Props) {
  const [count, setCount] = useState(1);

  const handleClick =  useCallback( () => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }, [count]);



  useEffect(() => {
    // Mainコンポーネントがレンダリングされる時に実行される。
    document.body.style.background = "lightblue"

    return () => {
      document.body.style.background = ""
    }
  }, [count])

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
    <h1>{count}</h1>
    <button
      onClick={handleClick}
    >
      ボタン
    </button>
    </div>
  );
}
