import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}>
        <h1>
          Привет! Вы на сайте сервера Videman.
        </h1>

        <img src="https://i.pinimg.com/736x/6a/44/33/6a4433d2f74a809c86b8d9e55d63ef5c.jpg"/>
    </Layout>
  );
}
