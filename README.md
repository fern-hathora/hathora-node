# Hathora Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/hathora)](https://www.npmjs.com/package/@fern-api/hathora)

The Hathora Node.js library provides access to the Hathora API from JavaScript/TypeScript.

## Documentation

API documentation is available [here](https://fern-api.stoplight.io/docs/hathora).

## Usage

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-wgxx3z?file=app.ts&view=editor)

```typescript
import { HathoraApiClient, HathoraApi } from '@fern-api/hathora';

const client = new HathoraApiClient({
  token: 'MY_TOKEN',
});

const response = await client.room.create('app-id', {
  region: HathoraApi.Region.UsEast1,
});

console.log('Received response from Hathora!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-hathora/hathora-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
