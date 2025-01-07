# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

NOTES:
* I am using a an extension called [PerfectPixel by WellDoneCode (pixel perfect)](https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi), you can see the difference screenshot in static/images/screenshot.png
* There are few cases when the text font-size in figma is 32px, but it is not pixel perfect in reality, so I've changed to 31px.
* Though I am using the given font-family with given font-sizes, line-heights the text is not perfectly matching, but as you can see in the screenshot the difference is maybe less then a pixel.
