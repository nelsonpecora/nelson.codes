<script>
  import Icon from '../../node_modules/fa-svelte'; //
  import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
  import Wrapper from './Wrapper.svelte';
  import Heading from './Heading.svelte';

  const year = (new Date()).getFullYear();
  // Obscure email from bots
  const emailOscura = '\u0068\u0069\u0040\u006e\u0065\u006c\u0073\u006f\u006e\u002e\u0063\u006f\u0064\u0065\u0073';
  const socials = [
    {
      icon: faTwitter,
      alt: 'twitter',
      title: '@nelsonpecora',
      url: 'https://twitter.com/nelsonpecora'
    }, {
      icon: faGithub,
      alt: 'github',
      title: 'nelsonpecora',
      url: 'https://github.com/nelsonpecora'
    }, {
      icon: faEnvelope,
      alt: 'email',
      title: emailOscura,
      url: `javascript:location="mailto:${emailOscura}";void 0`
    }
  ]
</script>

<style>
  .socials {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    margin: 20px 0;
    padding: 0;
  }
  .social {
    display: inline-block;
    flex: 0 0 auto;
    margin: 0 0 10px;
    list-style: none;
    padding: 0;
  }
  .social-link {
    align-items: center;
    background-color: #424B54;
    border-radius: 10px;
    display: flex;
    font-size: 20px;
    justify-content: flex-start;
    padding: 10px 15px;
    transition: 200ms background-color;
  }
  .social-link:hover {
    background-color: #31373E;
    transition: 200ms background-color;
  }
  .social-title {
    margin-left: 10px;
  }
  .copyright {
    font-size: 14px;
    margin: 20px 0;
  }
  @media screen and (min-width: 630px) {
    .socials {
      align-items: flex-start;
      flex-flow: row wrap;
      justify-content: space-between;
    }
    .social {
      margin: 0;
    }
  }
</style>

<Wrapper style="grey">
  <Heading title="Contact Me" />

  <!-- twitter, github, email -->
  <ul class="socials">
    {#each socials as social}
      <li class="social">
        <a class="social-link" href={social.url} title={social.alt}>
          <Icon icon={social.icon} />
          <span class="social-title">{social.title}</span>
        </a>
      </li>
    {/each}
  </ul>

  <!-- copyright notice -->
  <p class="copyright">
    © {year} Nelson Pecora, under a Creative Commons (<a href="http://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">attribution, noncommercial, share-alike</a>) license
  </p>
</Wrapper>
