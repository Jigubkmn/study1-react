"use client"

type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}

export function Main({listFirst, fileName, listSecond} :Props) {
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
    <button
      onClick={() => alert(123)}
    >
      ボタン</button>
    </div>
  );
}
