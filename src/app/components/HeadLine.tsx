type Props = {
  title: string;
};

export function HeadLine({ title }: Props ) {
  return (
    <div className="text-4xl">
      <div>{title}</div>
    </div>
  );
}
