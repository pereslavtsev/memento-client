# memento-client

![npm](https://img.shields.io/npm/v/@mementoweb/client)
![CircleCI](https://img.shields.io/circleci/build/github/pereslavtsev/memento-client/master)
![Coveralls](https://img.shields.io/coveralls/github/pereslavtsev/memento-client)
![Codacy branch grade](https://img.shields.io/codacy/grade/61b09fff2cdf4575bfc3fcbf046a3812/master)

[Time Travel APIs](http://timetravel.mementoweb.org/guide/api/) NodeJS library with full support of the Memento protocol, originally adapted from [memento-client](https://github.com/jarofghosts/memento-client).

## Installation
```bash
$ npm install @mementoweb/client

# or using yarn:
$ yarn add @mementoweb/client

# or using pnpm:
$ pnpm add @mementoweb/client
```

## Usage
```typescript
import MementoClient from '@mementoweb/client'

const client = new MementoClient('https://timetravel.mementoweb.org');
const { mementos: { closest } } = await client.uri('http://cnn.com').mementos('2013');
console.log(closest);
```

## Test
```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License
ISC
