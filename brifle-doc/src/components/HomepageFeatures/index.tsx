import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Trusted Users',
    Svg: require('@site/static/img/intro_birds/1_inline.svg').default,
    description: (
      <>
        All users are identified. This provides a secure environment for receivers and senders of documents.
      </>
    ),
  },
  {
    title: 'Paperless',
    Svg: require('@site/static/img/intro_birds/2_inline.svg').default,
    description: (
      <>
        Instead of printing your documents on paper and send them via mail, integrate a digital communication channel to your tools.
      </>
    ),
  },
  {
    title: 'Interactive',
    Svg: require('@site/static/img/intro_birds/3_inline.svg').default,
    description: (
      <>
        Add interactive features such as signature or payment elements.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4 ').concat(styles.featureItem)}>
      <div className='card' style={{height: "100%"}}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureRow.concat(" row")}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
