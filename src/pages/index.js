import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Math Tutorials</>,
    imageUrl: "img/undraw_online_test.svg",
    description: (
      <>
        In our maths tutorial, we go over common problems discuss in the GED
        exam and provide the steps to conquering them.
      </>
    ),
  },
  {
    title: <>Study Groups</>,
    imageUrl: "img/undraw_books.svg",
    description: (
      <>
        Need help or trying to find a study buddy? Join our Facebook group and
        discord to collaborate with like-minded people.
      </>
    ),
  },
  {
    title: <>Feedback</>,
    imageUrl: "img/undraw_learning.svg",
    description: (
      <>
        Please feel free to provide feedback. We are constantly seeking to
        improve squarify to best-fit people's needs.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`GED tutorials `}
      description="Squarify provides free GED math tutorial"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("/docs/basic-math-1")}
            >
              Get Started
            </Link>

            <Link
              className={classnames(
                "button button--outline button--secondary button--lg ",
                styles.joinCommunity
              )}
              to={useBaseUrl("/docs/join-community/join-community-1")}
            >
              Join Our Community
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
