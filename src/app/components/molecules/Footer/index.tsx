import { ArrowUp } from '../../atoms/icons';

export default function Footer() {
  return (
    <footer className="border-line text-faint flex items-center justify-between border-t py-8 font-mono text-[11px] tracking-[0.08em]">
      <div>© 2026 Rosa Reyes · Built with love in Madrid</div>
      <a
        href="#intro"
        className="text-faint hover:text-text flex items-center gap-1 no-underline transition-colors duration-200"
      >
        Back to top
        <span>
          <ArrowUp />
        </span>
      </a>
    </footer>
  );
}
