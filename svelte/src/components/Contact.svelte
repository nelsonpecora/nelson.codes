<script>
  import Icon from 'fa-svelte'; // https://github.com/alphapeter/fa-svelte/issues/5
  import {
    faTwitter,
    faGithub,
    faMastodon,
    faInstagram,
    faTiktok,
    faTumblr,
    faLinkedin,
  } from '@fortawesome/free-brands-svg-icons';
  import {
    faEnvelope,
    faEgg,
    faRss,
    faAt,
  } from '@fortawesome/free-solid-svg-icons';
  import Wrapper from './Wrapper.svelte';
  import Heading from './Heading.svelte';

  const year = new Date().getFullYear();
  // Obscure email from bots
  const emailOscura =
    '\u0068\u0069\u0040\u006e\u0065\u006c\u0073\u006f\u006e\u002e\u0063\u006f\u0064\u0065\u0073';
  const socials = [
    {
      category: 'Short Words',
      items: [
        {
          icon: faMastodon,
          alt: 'mastodon',
          title: 'nelson@mainframe.club',
          url: 'https://mainframe.club/@nelson',
        },
        {
          icon: faAt,
          alt: 'bluesky',
          title: '@nelson.codes',
          url: 'https://bsky.app/profile/nelson.codes',
        },
        {
          icon: faTwitter,
          alt: 'twitter',
          title: 'nelsonpecora (archive)',
          url: 'https://tweet.nelson.codes',
        },
      ],
    },
    {
      category: 'Longer Words',
      items: [
        {
          icon: faRss,
          alt: 'blog',
          title: 'blog.nelson.codes',
          url: 'https://blog.nelson.codes',
        },
        {
          icon: faTumblr,
          alt: 'tumblr',
          title: 'nelsonpecora',
          url: 'https://nelsonpecora.tumblr.com/',
        },
        {
          icon: faEgg,
          alt: 'cohost',
          title: 'nelsonpecora',
          url: 'https://cohost.org/nelsonpecora',
        },
      ],
    },
    {
      category: 'Worth a Thousand Words',
      items: [
        {
          icon: faInstagram,
          alt: 'instagram',
          title: 'nelsonpecora',
          url: 'https://www.instagram.com/nelsonpecora/',
        },
        {
          icon: faTiktok,
          alt: 'tiktok',
          title: 'nelsonpecora',
          url: 'https://www.tiktok.com/@nelsonpecora',
        },
      ],
    },
    {
      category: 'Business Words',
      items: [
        {
          icon: faGithub,
          alt: 'github',
          title: 'nelsonpecora',
          url: 'https://github.com/nelsonpecora',
        },
        {
          icon: faLinkedin,
          alt: 'linkedin',
          title: 'npecora',
          url: 'https://www.linkedin.com/in/npecora/',
        },
        {
          icon: faEnvelope,
          alt: 'email',
          title: emailOscura,
          url: `javascript:location="mailto:${emailOscura}";void 0`,
        },
      ],
    },
  ];
</script>

<Wrapper theme="grey">
  <Heading title="Contact Me" anchor="contact" />

  <!-- twitter, github, email, etc -->
  <ul class="socials">
    {#each socials as social}
      <li class="social">
        <h3 class="social-category">{social.category}</h3>
        <ul class="social-items">
          {#each social.items as item}
            <li class="social-item">
              <a class="social-link" href={item.url} title={item.alt} rel="me">
                <Icon icon={item.icon} />
                <span class="social-title">{item.title}</span>
              </a>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>

  <webring-banner class="webring">
    <p>
      Member of the <a href="https://web.mainframe.club">Mainframe.club</a> webring
    </p>
    <a href="https://web.mainframe.club/prev">Previous</a>
    <a href="https://web.mainframe.club/random">Random</a>
    <a href="https://web.mainframe.club/next">Next</a>
  </webring-banner>

  <!-- copyright notice -->
  <p class="copyright">
    © {year} Nelson Pecora, under a
    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"
      >Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
      License</a
    >
  </p>
</Wrapper>

<style>
  .socials {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0;
    padding: 0;
  }
  .social {
    display: flex;
    flex: 0 0 100%;
    flex-flow: row wrap;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .social-category {
    flex: 0 0 100%;
    margin: 0 0 10px;
  }
  .social-items {
    display: flex;
    flex: 0 0 100%;
    flex-flow: row wrap;
    margin: 0 0 30px;
    padding: 0;
  }
  .social-item {
    display: inline-block;
    flex: 0 0 100%;
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .social-link {
    align-items: center;
    background-color: #424b54;
    border-radius: 10px;
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
    padding: 10px 15px;
    transition: 200ms background-color;
  }
  .social-link:hover {
    background-color: #31373e;
  }
  .social-link:active {
    background-color: #24292e;
  }
  .social-title {
    margin-left: 10px;
  }
  .webring {
    color: #31373e;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .copyright {
    font-size: 14px;
    margin: 20px 0;
    text-align: center;
  }
  @media screen and (min-width: 630px) {
    .social-items {
      justify-content: space-between;
      margin: 0 0 40px;
    }
    .social-item {
      display: inline-flex;
      flex: 0 0 40%;
    }
  }
</style>
