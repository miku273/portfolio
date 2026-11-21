const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

const assets = {
  hero: asset("ad124.png"),
  flowers: asset("fca40.png"),
  about: asset("35caf.png"),
  skills: asset("a13e4.png"),
  work: asset("ae98a.png"),
  showcase: asset("18fb4.png"),
  contact: asset("91a3f.png"),
  paper: asset("c1ad9.svg"),
  linkPaper: asset("937e6.svg"),
  notePaper: asset("db69a.svg"),
  store: asset("6e157.png"),
  library: asset("8b9ea.png"),
};

function PaperCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div className={`paper-card ${className}`}>
      <img src={assets.paper} alt="" aria-hidden="true" />
      <div className="paper-surface" />
      {children}
    </div>
  );
}

function SectionBanner({ id }: { id: string }) {
  return (
    <div className="section-banner">
      <h2 id={id}>PERSONAL</h2>
    </div>
  );
}

function ShowcaseBase({ children }: { children: React.ReactNode }) {
  return (
    <section className="panel showcase-panel">
      <img className="panel-art" src={assets.showcase} alt="" />
      <img className="flower showcase-flower" src={assets.flowers} alt="" />
      {children}
      <div className="cover-block" aria-hidden="true" />
    </section>
  );
}

export default function App() {
  return (
    <main className="portfolio">
      <section className="panel hero" aria-labelledby="portfolio-title">
        <img className="panel-art" src={assets.hero} alt="" />
        <img className="flower flower-top" src={assets.flowers} alt="" />
        <p className="eyebrow">FRIENDLY AND PROFESSIONAL.</p>
        <h1 id="portfolio-title" className="portfolio-title" aria-label="Portfolio">
          <span>PORT</span>
          <span className="title-outline">FOLIO</span>
        </h1>
        <div className="name-tag">
          <span>THAI KHAC BAO</span>
        </div>
      </section>

      <section className="panel about" aria-labelledby="about-title">
        <img className="panel-art" src={assets.about} alt="" />
        <img className="flower flower-left" src={assets.flowers} alt="" />
        <img className="flower flower-right" src={assets.flowers} alt="" />
        <h2 id="about-title" className="brush-title">
          MY SELF
        </h2>
        <PaperCard className="about-card">
          <div className="about-copy">
            <p>Name: Thai Khac Bao</p>
            <p>Birth: 01/10/2007</p>
            <p>
              Email: <a href="mailto:thaibaoroyal12@gmail.com">thaibaoroyal12@gmail.com</a>
            </p>
            <p>
              PhoneNumber: <a href="tel:+84356350709">0356350709</a>
            </p>
            <p>Uni: Vinh University</p>
            <p className="indent">
              - Hope to make you have the best “art” experience, in love with color blue
            </p>
          </div>
        </PaperCard>
        <div className="cover-block" aria-hidden="true" />
      </section>

      <section className="panel skills" aria-labelledby="skills-title">
        <img className="panel-art" src={assets.skills} alt="" />
        <SectionBanner id="skills-title" />
        <PaperCard className="skills-card">
          <ul className="skills-list">
            <li>Understand English</li>
            <li>C++, CSS language</li>
            <li>Figma, VS Code</li>
            <li>Know how to use AI tools</li>
            <li>Manage time</li>
            <li>Teamwork</li>
          </ul>
        </PaperCard>
      </section>

      <section className="panel work" aria-labelledby="work-title">
        <img className="panel-art work-art" src={assets.work} alt="" />
        <SectionBanner id="work-title" />
        <PaperCard className="work-card">
          <ul className="skills-list work-list">
            <li>G6 Store (Google Workspace)</li>
            <li>Library book lending and return management programme</li>
            <li>Online newspaper web</li>
          </ul>
        </PaperCard>
        <div className="cover-block" aria-hidden="true" />
      </section>

      <ShowcaseBase>
        <img
          className="store-preview"
          src={assets.store}
          alt="G6 Store website with a technology shop hero and introduction section"
        />
        <a
          className="paper-note store-link"
          href="https://sites.google.com/view/g6-royal-store/home"
          target="_blank"
          rel="noreferrer"
        >
          <img src={assets.linkPaper} alt="" aria-hidden="true" />
          <span>View the G6 Store website</span>
        </a>
      </ShowcaseBase>

      <ShowcaseBase>
        <img
          className="library-preview"
          src={assets.library}
          alt="Library lending and return management program interface"
        />
        <div className="paper-note library-note">
          <img src={assets.notePaper} alt="" aria-hidden="true" />
          <span>Some screenshots from the library programme</span>
        </div>
      </ShowcaseBase>

      <section className="panel contact" aria-labelledby="contact-title">
        <div className="contact-art-wrap">
          <img src={assets.contact} alt="" />
        </div>
        <h2 id="contact-title" className="contact-title" aria-label="Contact me">
          <span className="contact-solid">CON</span>
          <span className="contact-faint">TACT</span>
          <span className="contact-me">ME</span>
        </h2>
        <address className="contact-details">
          <a href="tel:+84356350709">PhoneNumber: 0356350709</a>
          <a href="mailto:thaibaoroyal12@gmail.com">Email: thaibaoroyal12@gmail.com</a>
        </address>
      </section>
    </main>
  );
}
