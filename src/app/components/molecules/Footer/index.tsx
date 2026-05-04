import { ArrowUp } from '../../atoms/icons';

export default function Footer() {
  return (
    <footer className="border-line text-faint flex items-center justify-between border-t py-8 font-mono text-[11px] tracking-[0.08em]">
      <div>© 2026 Rosa Reyes · Built with love in Madrid</div>
      <a
        href="#intro"
        className="text-faint hover:text-text no-underline transition-colors duration-200"
      >
        Back to top <ArrowUp />
      </a>
    </footer>
  );
}
