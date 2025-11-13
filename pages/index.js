import Head from 'next/head';
import ScriptSection from '@/components/ScriptSection';
import { hook, beats, productionNotes } from '@/data/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>UGC Reel Script · AxisCAD Institute</title>
        <meta
          name="description"
          content="High-converting UGC reel script with hook, emotional beats, and value-driven CTA for a CAD training institute."
        />
      </Head>
      <main>
        <header className="hero">
          <p className="tag">UGC REEL SCRIPT</p>
          <h1>AxisCAD Institute – 45s Conversion Reel</h1>
          <p className="summary">
            Ready-to-shoot story framework combining emotional tension and value-driven proof to convert
            design aspirants into CAD trainees.
          </p>
        </header>

        <section className="hook">
          <h2>{hook.title}</h2>
          <p className="hook-line">{hook.lines[0]}</p>
        </section>

        <div className="grid">
          {beats.map((beat) => (
            <ScriptSection key={beat.id} title={beat.heading} tone={beat.tone} lines={beat.lines} />
          ))}
        </div>

        <section className="notes">
          <h2>Production Notes</h2>
          <ul>
            {productionNotes.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <p>
            💡 Tip: Keep the delivery tight—each beat should land within 8–10 seconds to maintain momentum
            and finish under 45 seconds.
          </p>
        </footer>
      </main>
    </>
  );
}
