import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ─── Terminal animation component ────────────────────────────────────────────
function TerminalWindow() { 
  const line = (delay: number, children: React.ReactNode) => (
    <div className={clsx(styles.terminalLine, styles[`lineDelay${delay}`])}>
      {children}
    </div>
  );
 
  const i = <span className={styles.indent}>{'  '}</span>;
  const i2 = <span className={styles.indent}>{'    '}</span>;
  const i3 = <span className={styles.indent}>{'      '}</span>;
 
  return (
    <div className={styles.terminal}>
      <div className={styles.terminalBar}>
        <span className={clsx(styles.terminalDot, styles.dotRed)} />
        <span className={clsx(styles.terminalDot, styles.dotYellow)} />
        <span className={clsx(styles.terminalDot, styles.dotGreen)} />
        <span className={styles.terminalTitle}>sandbox-api.brifle.de — curl</span>
      </div>

      <div className={styles.terminalBody}>
        {/* curl command */}
        {line(0, <><span className={styles.prompt}>$</span><span className={styles.cmd}> curl -L \</span></>)}
        {line(1, <>{i}<span className={styles.url}>'https://sandbox-api.brifle.de/v1/content/send/:tenant'</span><span className={styles.cmd}> \</span></>)}
        {line(2, <>{i}<span className={styles.flag}>-H </span><span className={styles.str}>'Content-Type: application/json'</span><span className={styles.cmd}> \</span></>)}
        {line(3, <>{i}<span className={styles.flag}>-H </span><span className={styles.str}>'Accept: application/json'</span><span className={styles.cmd}> \</span></>)}
        {line(4, <>{i}<span className={styles.flag}>-H </span><span className={styles.str}>'Authorization: Bearer {'<token>'}</span><span className={styles.cmd}> \</span></>)}

        {/* FIX: start JSON body cleanly */}
        {line(5, <>{i}<span className={styles.flag}>--data-raw </span><span className={styles.str}>'{'{'}'</span></>)}

        {/* body array */}
        {line(6,  <>{i2}<span className={styles.jsonKey}>"body"</span><span className={styles.json}>: [{'{'}</span></>)}
        {line(7,  <>{i3}<span className={styles.jsonKey}>"content"</span><span className={styles.json}>: </span><span className={styles.str}>"PDF Content"</span><span className={styles.json}>,</span></>)}
        {line(8,  <>{i3}<span className={styles.jsonKey}>"type"</span><span className={styles.json}>: </span><span className={styles.str}>"application/pdf"</span></>)}
        {line(9,  <>{i2}<span className={styles.json}>{'}],'}</span></>)}

        {/* subject & type */}
        {line(10, <>{i2}<span className={styles.jsonKey}>"subject"</span><span className={styles.json}>: </span><span className={styles.str}>"Important Document"</span><span className={styles.json}>,</span></>)}
        {line(11, <>{i2}<span className={styles.jsonKey}>"type"</span><span className={styles.json}>: </span><span className={styles.str}>"letter"</span><span className={styles.json}>,</span></>)}

        {/* to object */}
        {line(12, <>{i2}<span className={styles.jsonKey}>"to"</span><span className={styles.json}>: {'{'}</span></>)}
        {line(13, <>{i3}<span className={styles.jsonKey}>"first_name"</span><span className={styles.json}>: </span><span className={styles.str}>"Max"</span><span className={styles.json}>,</span></>)}
        {line(14, <>{i3}<span className={styles.jsonKey}>"last_name"</span><span className={styles.json}>: </span><span className={styles.str}>"Mustermann"</span><span className={styles.json}>,</span></>)}
        {line(15, <>{i3}<span className={styles.jsonKey}>"date_of_birth"</span><span className={styles.json}>: </span><span className={styles.str}>"1990-01-01"</span><span className={styles.json}>,</span></>)}
        {line(16, <>{i3}<span className={styles.jsonKey}>"email"</span><span className={styles.json}>: </span><span className={styles.str}>"john.doe@example.com"</span><span className={styles.json}>,</span></>)}
        {line(17, <>{i3}<span className={styles.jsonKey}>"tel"</span><span className={styles.json}>: </span><span className={styles.str}>"+491234567890"</span><span className={styles.json}>,</span></>)}
        {line(18, <>{i3}<span className={styles.comment}>{'/* ... postal_address, birth_information */'}</span></>)}
        {line(19, <>{i2}<span className={styles.json}>{'}'}</span></>)}

        {/* FIX: close JSON + string properly */}
        {line(20, <>{i}<span className={styles.str}>"'"</span></>)}

        {/* response */}
        {line(21, <><span className={styles.comment}>{'# ← 201 Created'}</span></>)}
        {line(22, <><span className={styles.json}>{'{'}</span></>)}
        {line(23, <>{i}<span className={styles.jsonKey}>"id"</span><span className={styles.json}>: </span><span className={styles.str}>"msg_a3f91b"</span><span className={styles.json}>,</span></>)}
        {line(24, <>{i}<span className={styles.jsonKey}>"status"</span><span className={styles.json}>: </span><span className={styles.str}>"delivered"</span></>)}
        {line(25, <><span className={styles.json}>{'}'}</span></>)}
        {line(26, <><span className={styles.cursor} /></>)}
      </div>
    </div>
  );
}
 




// ─── Feature cards ────────────────────────────────────────────────────────────
const features = [
  {
    icon: '⚡',
    tag: 'REST API',
    title: 'Simple HTTP API',
    desc: 'RESTful endpoints with predictable responses. Send a document, get structured data back. No SDK required.',
    href: '/docs/api/brifle',
  },
  {
    icon: '📦',
    tag: 'SDKs',
    title: 'Official Client Libraries',
    desc: 'Type-safe SDKs for TypeScript, Go and more.',
    href: '/docs/sdks/Java/intro',
  },
  {
    icon: '🔐',
    tag: 'Auth',
    title: 'Secure by Default',
    desc: 'API key auth, scoped tokens. Role-based access for multi-tenant setups.',
    href: '/docs/tutorials/Get Started/authenticate_api',
  },
];

function FeatureCard({ icon, tag, title, desc, href }: typeof features[0]) {
  return (
    <Link to={href} className={styles.featureCard}>
      <div className={styles.featureTop}>
        <span className={styles.featureTag}>{tag}</span>
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{desc}</p>
      <span className={styles.featureArrow}>→</span>
    </Link>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────
const stats = [
  { value: '<50ms', label: 'Median latency' },
  { value: '99.9%', label: 'Uptime SLA' }, 
  { value: 'v1',    label: 'Stable API' },
];

// ─── Quick-start tabs ─────────────────────────────────────────────────────────
const quickstartSteps = [
  { num: '01', title: 'Get your API key', desc: 'Create a Brifle account and generate an API key from the dashboard.' },
  { num: '02', title: 'Send a document', desc: 'Send any PDF to /v1/content/send/:tenant. The API returns a document ID instantly.' },
  { num: '03', title: 'Receive classified data', desc: 'Poll or subscribe via webhook to receive the structured, classified result.' },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      {/* Background effects */}
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />

      <div className={styles.heroInner}>
        {/* Left column */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            developer.brifle.de
          </div>

          <Heading as="h1" className={styles.heroTitle}>
            <span className={styles.heroTitleDim}>Build on</span>
            <br />
            <span className={styles.heroTitleBright}>Brifle API</span>
          </Heading>

          <p className={styles.heroSubtitle}>
            {siteConfig.tagline || 'Automate document intake, AI classification, and administrative workflows with a clean REST API.'}
          </p>

          <div className={styles.heroCtas}>
            <Link className={styles.ctaPrimary} to="/docs/tutorials/intro">
              Quickstart — 5 min
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/api/brifle">
              API Reference
            </Link>
          </div>

          <div className={styles.statsRow}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — terminal */}
        <div className={styles.heroVisual}>
          <TerminalWindow />
        </div>
      </div>
    </header>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Developer Docs`}
      description="Explore the developer documentation for Brifle — REST API, webhooks, SDKs and AI document classification."
    >
      <HomepageHeader />

      <main className={styles.main}>
        {/* ── Features grid ── */}
        <section className={styles.section}>
          <div className={styles.sectionLabel}>What you can build</div>
          <h2 className={styles.sectionTitle}>Everything you need<br />to ship fast</h2>
          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* ── Quickstart steps ── */}
        <section className={clsx(styles.section, styles.sectionAlt)}>
          <div className={styles.quickstartInner}>
            <div className={styles.quickstartLeft}>
              <div className={styles.sectionLabel}>Getting started</div>
              <h2 className={styles.sectionTitle}>Up and running<br />in minutes</h2>
              <Link className={styles.ctaPrimary} to="/docs/tutorials/intro">
                Read the tutorial →
              </Link>
            </div>
            <div className={styles.quickstartSteps}>
              {quickstartSteps.map((step) => (
                <div key={step.num} className={styles.quickstartStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className={styles.bottomCta}>
          <div className={styles.bottomCtaGlow} aria-hidden="true" />
          <p className={styles.bottomCtaEyebrow}>Open Beta</p>
          <h2 className={styles.bottomCtaTitle}>Ready to integrate?</h2>
          <p className={styles.bottomCtaSub}>
            Get access to the Sandbox environment and start testing the API with your documents. 
          </p>
          <div className={styles.heroCtas}>
            <Link className={styles.ctaPrimary} to="/docs/tutorials/intro">
              Start building
            </Link>
            <Link className={styles.ctaSecondary} to="/docs/api/brifle">
              API Reference
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
} 