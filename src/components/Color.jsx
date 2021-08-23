export default function Color({
  children: backgroundColor = '#000',
  onColorClick = null,
}) {
  return (
    <div
      className="h-5 w-5 rounded-full border border-black cursor-pointer"
      style={{ backgroundColor }}
      onClick={() => onColorClick(backgroundColor)}
    >
      &nbsp;
    </div>
  );
}
