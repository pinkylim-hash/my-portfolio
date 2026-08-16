import { footerContent, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">PINKY<span>林育桦</span></div>
      <p>{footerContent.tagline}</p>
      <div className="footer-links">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span>{site.city}</span>
        <a href={site.notion} target="_blank" rel="noreferrer">Notion ↗</a>
        <a href={site.xiaohongshu} target="_blank" rel="noreferrer">小红书 ↗</a>
        <a href={site.douyin} target="_blank" rel="noreferrer">抖音 ↗</a>
        <a href="#home">Back to top ↑</a>
      </div>
      <div className="footer-bottom"><span>{footerContent.copyright}</span><span>{footerContent.closing}</span></div>
    </footer>
  );
}
