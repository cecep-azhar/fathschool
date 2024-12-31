export function renderDesc(desc: string) {
  const keyword = "FathSchool";
  const parts = desc.split(keyword);

  return parts.map((part, index) => {
    if (index !== parts.length - 1) {
      return (
        <>
          {part}
          <span className="text-gradient gradient-7">{keyword}</span>
        </>
      );
    }
    return part;
  });
}
