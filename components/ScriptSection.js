export default function ScriptSection({ title, tone, lines }) {
  return (
    <section className="script-section">
      <header>
        <span className="tone">#{tone}</span>
        <h2>{title}</h2>
      </header>
      <ul>
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
