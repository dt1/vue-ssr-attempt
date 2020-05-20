This is my solution to using axios with vue server side rendering.

The documentation and various solutions online aren't particularly helpful, and since this seems to be a problem a lot of people are running into, I would like to offer up my own solution.

You can see my question and answer in [StackOverflow](https://stackoverflow.com/questions/61835978/vuejs-sever-side-rendering-computed-property-not-seeing-changes-in-store)

to run:

```bash
$ npm install
```

```bash
`$ npm run build-client && npm run build-server && npm run dev
```

If you don't want to use nodemon, run this:

```bash
npm run build-client && npm run build-server && node server.js
```

open on `localhost:8080`

You should see a page rendered with data, unstyled.
