import type { SocialLink } from "../types";

interface FooterProps {
  copyright: string;
  socials: SocialLink[];
  aiNote?: string;
}

export default function Footer({ copyright, socials, aiNote }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gray-950/60 backdrop-blur-md py-8 px-4 text-center text-sm text-gray-300">
      <div className="container mx-auto flex flex-col items-center gap-5">
        {socials.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-3">
            {socials.map((social, idx) => (
              <li key={idx}>
                <a
                  href={social.url}
                  target={
                    social.url.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.url.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-gray-200 hover:bg-white/15 hover:border-white/30 hover:text-white transition-colors"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {aiNote && (
          <div className="max-w-2xl rounded-xl bg-amber-700/10 border border-indigo-400/25 px-4 py-2.5 text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 align-middle" />
            {aiNote}
          </div>
        )}

        <p className="text-xs text-yellow-400">{copyright}</p>
      </div>
    </footer>
  );
}
