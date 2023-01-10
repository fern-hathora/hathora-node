/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.room.create.Response.Raw, HathoraApi.CreateRoomResponse> =
  core.schemas.lazyObject(async () => (await import("../..")).CreateRoomResponse);

export declare namespace Response {
  type Raw = serializers.CreateRoomResponse.Raw;
}