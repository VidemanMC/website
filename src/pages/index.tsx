import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
        <h1 style={{text-align: 'center'}}>
          Лучшый отдых - это смена деятельности. Отдыхай, играя
        </h1>

        <img src="/img/joke/team.png"/>
    </Layout>
  );
}
