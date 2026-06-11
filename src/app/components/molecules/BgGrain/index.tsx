export default function BgGrain() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at 50% 30%, black 0%, transparent 70%)',
      }}
    />
  );
}
