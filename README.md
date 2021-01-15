![Tests](https://github.com/softatac/nextjs-boilerplate/workflows/Run%20tests/badge.svg)

NextJS boilerplate with:
- tailwindCSS
- sentry
- testing (examples provided), mocking using
    - [msw](https://mswjs.io)
    - [react testing library](https://testing-library.com/docs/react-testing-library/intro/)
- context API with [SWR](https://swr.vercel.app) for api call
- some basic usefull components


# Getting Started

Checkout `package.json` for available commands

## Development

1. Install dependencies: `yarn`
2. Start dev server `yarn dev`
3. Acces on http://localhost:9009

## Testing

- full suite: `yarn test`
- individual file: `npx jest -i src/components/Icon/Icon.test.tsx`

## Front-end development

[Components guidelines](src/components/README.md)

[Storybook](https://storybook.js.org)

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Coding guidelines
- use [prettier](https://prettier.io), integrated with IDE ([VS code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) on save ([VS Code](https://www.robinwieruch.de/how-to-use-prettier-vscode))
- store interfaces/types, as close to their use/provenience as possible
    - for api realted, in `lib/api/types`
    - for props, with the component (in `components/<ComponentName>/types.ts` or `<ComponentName>.tsx`)
- keep components small, ideally <80 lines (to ensure an easy dev experience)
