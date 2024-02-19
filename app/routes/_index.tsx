import { json, type MetaFunction } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import Heading from '~/components/Heading';
import Projects from '~/components/Projects';
import Splash from '~/components/Splash';

import * as css from '~/_index.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Nelson Pecora' },
    { property: 'og:title', content: 'Nelson Pecora' },
    { property: 'twitter:title', content: 'Nelson Pecora' },
    { property: 'og:url', content: 'https://nelson.codes' },
    { property: 'twitter:url', content: 'https://nelson.codes' },
  ];
};

export const loader = async () => {
  return json({
    projects: [
      {
        title: 'Alexandria',
        desc: "Newsela's GraphQL-based Content Management System. Built with Node.js, React, Apollo, and Dgraph.",
        img: 'alexandria',
        link: 'https://www.forbes.com/sites/craigsmith/2020/08/31/your-life-is-a-graph-look-at-it-that-way/#4d9bee1a2a47',
      },
      {
        title: 'Clay',
        desc: "New York Magazine's Content Management System, powering five brand verticals and multiple popup blogs. Built with Node.js, Vue, PostgreSQL, and Redis PubSub.",
        img: 'clay',
        link: 'http://nymag.com/press/2018/01/introducing-clay-new-york-medias-open-source-cms.html',
      },
      {
        title: 'Nelson.codes',
        desc: 'My personal website is an ongoing project, where I get to try out cool new technologies without dealing with legacy browsers or client requirements.',
        img: 'nelsoncodes',
        link: 'https://github.com/nelsonpecora/nelson.codes',
      },
      {
        title: 'Femmefaust.us',
        desc: 'Personal website for my partner, award-winning playwright and narrative designer Charlotte Lang-Bush.',
        img: 'femmefaustus',
        link: 'http://femmefaust.us/',
      },
      {
        title: '2019 Tri State Tai Kai',
        desc: 'Small site for a Battodo event I helped organize, which gave me the opportunity to build a site with GatsbyJS.',
        img: 'taikai',
        link: 'http://tristatetaikai.org/',
      },
      {
        title: 'Here Comes The Airplane',
        desc: 'A satire of silicon valley startups, which went viral and got written up in a handful of magazines and media outlets.',
        img: 'herecomestheairplane',
        link: 'https://www.herecomestheairplane.co/',
      },
    ],
  });
};

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <main className={css.main}>
      <Splash />
      <section id="second" className={css.second}>
        <Heading title="Cool Stuff I've Built" />
        <Projects data={projects} />
      </section>
    </main>
  );
}
