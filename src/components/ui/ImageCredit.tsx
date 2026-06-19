type ImageCreditProps = {
  photographer: string;
  url: string;
  label: string;
};

export function ImageCredit({ photographer, url, label }: ImageCreditProps) {
  return (
    <p className="text-xs text-espresso/50">
      {label}{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 hover:text-copper"
      >
        {photographer}
      </a>
    </p>
  );
}
