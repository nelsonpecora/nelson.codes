import type { MetaFunction } from '@remix-run/cloudflare';
import Heading from '~/components/Heading';
import Projects from '~/components/Projects';
import Splash from '~/components/Splash';

export const meta: MetaFunction = () => {
  return [
    { title: 'Nelson Pecora' },
    { property: 'og:title', content: 'Nelson Pecora' },
    { property: 'twitter:title', content: 'Nelson Pecora' },
    { property: 'og:url', content: 'https://nelson.codes' },
    { property: 'twitter:url', content: 'https://nelson.codes' },
  ];
};

export default function Index() {
  return (
    <main>
      <Splash />
      <section id="second">
        <Heading title="Cool Stuff I've Built" />
        <Projects data={[]} />
      </section>
    </main>
  );
}
