/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.room.destroy.Response.Raw, HathoraApi.DestroyRoomResponse> =
  core.schemas.lazyObject(async () => (await import("../..")).DestroyRoomResponse);

export declare namespace Response {
  type Raw = serializers.DestroyRoomResponse.Raw;
}
