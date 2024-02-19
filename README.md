# nelson.codes

This is the repo for my personal website. It's mostly static content, but I wanted to try out [Remix](https://remix.run/) and Cloudflare's edge functions.

## Layout

- Homepage — A good splash page is still useful, even in the post-postmodern web. This shows off the latest cool stuff I've built, along with my old portfolio of client projects.
- Resume — I want to experiment with different portrayals of "resume" information, since the web is much more flexible than a greyscale piece of printer paper. Currently the resume is heavily inspired by [twine games](https://twinery.org/).
- That's it! — personal websites should be lean and mean.

## Development

This site uses Wrangler for local development to emulate the Cloudflare runtime. You can run things locally with:

```sh
npm run dev
```

That will launch a dev server running on [localhost:8788](http://127.0.0.1:8788) with HMR and all that good stuff.

Cloudflare automatically builds and deploys the `main` branch to [nelson.codes](https://nelson.codes), and pull requests get preview builds as well.
