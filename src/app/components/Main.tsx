type Props = {
  listFirst: string;
  fileName: string;
  listSecond: string;
}

export function Main({listFirst, fileName, listSecond} :Props) {
  return (
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
  );
}
