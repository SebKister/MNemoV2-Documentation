import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const imgUrl = useBaseUrl('img/MNemov2.jpg');
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'}}>
        <img src={imgUrl} alt="MNemo V2" />
      </main>
    </Layout>
  );
}
