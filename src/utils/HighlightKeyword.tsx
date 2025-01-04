export function HighlightKeyword (text: string, keyword: string): React.ReactNode {
  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="text-gradient gradient-7">
        {part}
      </span>
    ) : (
      part
    )
  );
};
