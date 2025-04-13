"use client"

import { useCallback, useEffect, useState } from "react";

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}


export function Main({listFirst, fileName, listSecond} :Props) {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick =  useCallback( () => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1)
    }
  }, [count]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => {
      // return isShow ? false : true;
      return !isShow;
    })
  }, []);


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
    {isShow ? <h1>{count}</h1>: null}
    <button
      onClick={handleClick}
    >
      ボタン
    </button>
    <button onClick={handleDisplay}>
      {isShow ? "非表示" : "表示" }
    </button>
    <input type="text"
    value={text}
    onChange={handleInputChange}
    />
    </div>
  );
}
