export default function Hero({
  h1,
  introText,
}: {
  h1?: string;
  introText?: string;
}) {
  return (
    <div className="flex flex-col items-start">
      <h1>
        {h1}
      </h1>
      {introText !== undefined && (
        <div
          className="h4"
        >
          {introText}
        </div>
      )}
    </div>
  );
}
