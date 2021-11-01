# memento-client

[Time Travel APIs](http://timetravel.mementoweb.org/guide/api/) NodeJS library with full support of the Memento protocol.

## Usage
```typescript
import MementoClient from '@mementoweb/client'

const client = new MementoClient('https://timetravel.mementoweb.org');
const { mementos: { closest } } = await client.uri('http://cnn.com').mementos('2013');
console.log(closest);
```
