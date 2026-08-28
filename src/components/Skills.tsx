import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Line {
  type: 'command' | 'output' | 'json' | 'blank';
  content?: string;
  json?: { key: string; values: string[] }[];
}

const lines: Line[] = [
  { type: 'command', content: 'whoami' },
  { type: 'output', content: 'adolfo, desarrollador fullstack' },
  { type: 'blank' },
  { type: 'command', content: 'cat stack.json' },
  {
    type: 'json',
    json: [
      { key: 'frontend', values: ['React', 'TypeScript', 'Tailwind', 'HTML', 'CSS'] },
      { key: 'backend', values: ['Node.js', 'Express', 'PostgreSQL'] },
      { key: 'tools', values: ['Docker', 'Git', 'Vite'] },
    ],
  },
  { type: 'blank' },
  { type: 'command', content: 'echo $STATUS' },
  { type: 'output', content: 'disponible para nuevos proyectos' },
];

const useTypewriter = (text: string, active: boolean, speed = 28) => {
  const [out, setOut] = useState('');
  useEffect(() => {
    if (!active) return;
    setOut('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed]);
  return out;
};

const Skills = () => {
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= lines.length) return;
    const current = lines[visibleCount];
    const delay = current.type === 'blank' ? 150 : current.type === 'json' ? 900 : 550;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay);
    return () => clearTimeout(timer);
  }, [started, visibleCount]);

  return (
    <section id="stack" className="px-6 sm:px-12 py-24 lg:py-32 max-w-[1180px] mx-auto">
      <div className="text-center max-w-[640px] mx-auto mb-16">
        <div className="eyebrow justify-center mb-4">
          <span className="hidden" />
          Stack técnico
        </div>
        <h2 className="font-display font-semibold text-4xl mb-4">Con lo que trabajo todos los días</h2>
        <p className="font-body text-base leading-relaxed" style={{ color: 'var(--cream-dim)' }}>
          Directo desde la fuente, sin vueltas.
        </p>
      </div>

      <div ref={ref} className="max-w-[720px] mx-auto">
        <div
          className="rounded-md overflow-hidden"
          style={{ border: '1px solid var(--line-strong)', background: '#0A0806' }}
        >
          <div
            className="flex items-center px-3 py-0"
            style={{ background: 'var(--bg-charcoal)', borderBottom: '1px solid var(--line)' }}
          >
            <div className="flex items-center gap-2 py-2.5">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="14" height="14" rx="1.5" stroke="var(--ember)" strokeWidth="1.1" />
                <path d="M4 5.5L7 8L4 10.5" stroke="var(--ember)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="8" y1="10.5" x2="11.5" y2="10.5" stroke="var(--ember)" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              <span className="font-mono text-[12px]" style={{ color: 'var(--cream-dim)' }}>
                stack.sh — Windows PowerShell
              </span>
            </div>
            <div className="flex items-center gap-5 ml-auto" style={{ color: 'var(--cream-dim)' }}>
              <span className="font-mono text-[13px] leading-none">−</span>
              <span className="font-mono text-[11px] leading-none">▢</span>
              <span className="font-mono text-[13px] leading-none">×</span>
            </div>
          </div>
          <div className="font-mono text-[13px] sm:text-sm p-5 sm:p-7 min-h-[340px] leading-relaxed">
            {lines.slice(0, visibleCount).map((line, i) => (
              <TerminalLine
                key={i}
                line={line}
                isTyping={i === visibleCount - 1}
              />
            ))}
            {visibleCount < lines.length && lines[visibleCount]?.type !== 'json' && (
              <TerminalLine line={lines[visibleCount]} isTyping />
            )}
            {visibleCount >= lines.length && (
              <span className="inline-block w-2 h-4 align-middle animate-pulse" style={{ background: 'var(--ember)' }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const TerminalLine = ({ line, isTyping }: { line: Line; isTyping: boolean }) => {
  const text = line.content ?? '';
  const typed = useTypewriter(text, isTyping && line.type !== 'json' && line.type !== 'blank');
  const shown = isTyping && line.type !== 'json' && line.type !== 'blank' ? typed : text;

  if (line.type === 'blank') return <div className="h-3" />;

  if (line.type === 'command') {
    return (
      <div className="flex gap-2">
        <span style={{ color: 'var(--ember)' }}>$</span>
        <span style={{ color: 'var(--cream)' }}>{shown}</span>
      </div>
    );
  }

  if (line.type === 'output') {
    return (
      <div className="pl-4 mb-1" style={{ color: 'var(--sage)' }}>
        {'>'} {shown}
      </div>
    );
  }

  if (line.type === 'json') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pl-4 mb-1"
      >
        <span style={{ color: 'var(--cream-dim)' }}>{'{'}</span>
        {line.json?.map((group, gi) => (
          <div key={group.key} className="pl-4">
            <span style={{ color: 'var(--ember)' }}>"{group.key}"</span>
            <span style={{ color: 'var(--cream-dim)' }}>: [</span>
            <span>
              {group.values.map((v, vi) => (
                <span key={v}>
                  <span style={{ color: 'var(--sage)' }}>"{v}"</span>
                  {vi < group.values.length - 1 && <span style={{ color: 'var(--cream-dim)' }}>, </span>}
                </span>
              ))}
            </span>
            <span style={{ color: 'var(--cream-dim)' }}>]{gi < (line.json?.length ?? 0) - 1 ? ',' : ''}</span>
          </div>
        ))}
        <span style={{ color: 'var(--cream-dim)' }}>{'}'}</span>
      </motion.div>
    );
  }

  return null;
};

export default Skills;