import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ROUTE_MAP = {
  'index.html': '/',
  'services.html': '/services',
  'gallery.html': '/gallery',
  'quote.html': '/quote',
  'about.html': '/about',
  'blog.html': '/blog',
  'seo-pages.html': '/seo-pages',
  'pressure-washing-houston.html': '/pressure-washing-houston',
  'pressure-washing-sugar-land.html': '/pressure-washing-sugar-land',
  'pressure-washing-katy.html': '/pressure-washing-katy',
  'pressure-washing-pearland.html': '/pressure-washing-pearland',
  'pressure-washing-the-woodlands.html': '/pressure-washing-the-woodlands',
  'roof-cleaning-sugar-land.html': '/roof-cleaning-sugar-land',
  'roof-cleaning-katy.html': '/roof-cleaning-katy',
  'roof-cleaning-pearland.html': '/roof-cleaning-pearland',
  'roof-cleaning-the-woodlands.html': '/roof-cleaning-the-woodlands',
  'driveway-cleaning-sugar-land.html': '/driveway-cleaning-sugar-land',
  'driveway-cleaning-katy.html': '/driveway-cleaning-katy',
  'driveway-cleaning-pearland.html': '/driveway-cleaning-pearland',
  'driveway-cleaning-the-woodlands.html': '/driveway-cleaning-the-woodlands',
  'house-washing-sugar-land.html': '/house-washing-sugar-land',
  'house-washing-katy.html': '/house-washing-katy',
  'house-washing-pearland.html': '/house-washing-pearland',
  'house-washing-the-woodlands.html': '/house-washing-the-woodlands',
  'how-often-pressure-wash-houston.html': '/how-often-pressure-wash-houston',
  'soft-wash-vs-pressure-wash.html': '/soft-wash-vs-pressure-wash',
  'remove-roof-streaks-houston.html': '/remove-roof-streaks-houston',
  'pressure-washing-cost-houston.html': '/pressure-washing-cost-houston',
  'pressure-washing-before-selling.html': '/pressure-washing-before-selling',
  'how-to-choose-pressure-washer-houston.html': '/how-to-choose-pressure-washer-houston',
};

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
}

function rewriteHtml(html) {
  let body = extractBody(html);
  // Fix relative asset paths to absolute (Vite serves /public at root)
  body = body.replace(/src="brand_assets\//g, 'src="/brand_assets/');
  body = body.replace(/href="brand_assets\//g, 'href="/brand_assets/');
  // Strip the Tailwind-config script block (we have a global one in index.html)
  body = body.replace(/<script[^>]*id="tailwind-config"[\s\S]*?<\/script>/gi, '');
  return body;
}

export default function LegacyPage({ html }) {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!ref.current) return;

    // Re-execute any inline <script> tags that came in via dangerouslySetInnerHTML
    // (innerHTML doesn't run scripts automatically).
    ref.current.querySelectorAll('script').forEach((old) => {
      // Skip the tailwind-config (already stripped, but defensive)
      if (old.id === 'tailwind-config') return;
      const next = document.createElement('script');
      [...old.attributes].forEach((a) => next.setAttribute(a.name, a.value));
      next.text = old.text;
      old.parentNode.replaceChild(next, old);
    });

    // Scroll-reveal observer for .reveal-on-scroll / .reveal-section / .scroll-reveal
    const revealEls = ref.current.querySelectorAll('.reveal-on-scroll, .reveal-section, .scroll-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('active', 'visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));

    // Reset scroll position on route change
    window.scrollTo(0, 0);

    return () => io.disconnect();
  }, [html]);

  // Intercept clicks on internal *.html links → react-router navigation
  const onClick = (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;
    // External, anchor, mailto, tel — let browser handle
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return;
    // Internal .html link → SPA navigation
    const file = href.split('/').pop();
    if (ROUTE_MAP[file]) {
      e.preventDefault();
      navigate(ROUTE_MAP[file]);
    }
  };

  return <div ref={ref} onClick={onClick} dangerouslySetInnerHTML={{ __html: rewriteHtml(html) }} />;
}
