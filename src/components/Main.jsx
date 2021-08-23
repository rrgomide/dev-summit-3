export default function Main({
  children = 'Conteúdo de Main',
  backgroundColor = '#FFF',
}) {
  return (
    <main className="h-screen" style={{ backgroundColor }}>
      <div className="container mx-auto p-4">{children}</div>
    </main>
  );
}
