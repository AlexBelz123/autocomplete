const getHighlightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return parts.map((part) => (
    <span
      key={Math.random() * 10000}
      style={{ fontWeight: `${part.toLowerCase() === highlight.toLowerCase() ? 300 : 700}` }}>
      {part}
    </span>
  ));
};

export default getHighlightedText;
