/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { HathoraApi } from "@fern-api/hathora";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment: string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async create(
    appId: HathoraApi.AppId,
    request: HathoraApi.CreateRoomRequest
  ): Promise<HathoraApi.room.create.Response> {
    const _queryParams = new URLSearchParams();
    _queryParams.append("region", request.region);
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/rooms/create/${appId}`),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      queryParameters: _queryParams,
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.room.create.Response.parse(_response.body as serializers.room.create.Response.Raw),
      };
    }

    return {
      ok: false,
      error: HathoraApi.room.create.Error._unknown(_response.error),
    };
  }

  public async connect(appId: HathoraApi.AppId, roomId: HathoraApi.RoomId): Promise<HathoraApi.room.connect.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/rooms/connect/${appId}/${roomId}`),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.room.connect.Response.parse(_response.body as serializers.room.connect.Response.Raw),
      };
    }

    return {
      ok: false,
      error: HathoraApi.room.connect.Error._unknown(_response.error),
    };
  }

  public async suspend(appId: HathoraApi.AppId, roomId: HathoraApi.RoomId): Promise<HathoraApi.room.suspend.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/rooms/suspense/${appId}/${roomId}`),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.room.suspend.Response.parse(_response.body as serializers.room.suspend.Response.Raw),
      };
    }

    return {
      ok: false,
      error: HathoraApi.room.suspend.Error._unknown(_response.error),
    };
  }

  public async destroy(appId: HathoraApi.AppId, roomId: HathoraApi.RoomId): Promise<HathoraApi.room.destroy.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment, `/rooms/destory/${appId}/${roomId}`),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.room.destroy.Response.parse(_response.body as serializers.room.destroy.Response.Raw),
      };
    }

    return {
      ok: false,
      error: HathoraApi.room.destroy.Error._unknown(_response.error),
    };
  }
}