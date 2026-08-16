import { footerContent, site } from "@/data/site";

export function ContactSection() {
  return (
    <section id="connect" className="contact">
      <h2>
        Get in <em>touch</em>.
      </h2>
      <a className="contact-email" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      <div className="contact-links">
        <a href={site.notion} target="_blank" rel="noreferrer">Notion</a>
        <a href={site.douyin} target="_blank" rel="noreferrer">抖音</a>
        <a href={site.xiaohongshu} target="_blank" rel="noreferrer">小红书</a>
      </div>
      <p className="contact-copyright">{footerContent.copyright}</p>
    </section>
  );
}
