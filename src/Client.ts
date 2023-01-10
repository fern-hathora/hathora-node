/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "./core";
import { Client as AppClient } from "./resources/app/client/Client";
import { Client as RoomClient } from "./resources/room/client/Client";

export declare namespace HathoraApiClient {
  interface Options {
    environment: string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class HathoraApiClient {
  constructor(private readonly options: HathoraApiClient.Options) {}

  #app: AppClient | undefined;

  public get app(): AppClient {
    return (this.#app ??= new AppClient(this.options));
  }

  #room: RoomClient | undefined;

  public get room(): RoomClient {
    return (this.#room ??= new RoomClient(this.options));
  }
}
