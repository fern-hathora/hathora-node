/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.room.connect.Response.Raw,
    HathoraApi.ConnectToRoomResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).ConnectToRoomResponse);

export declare namespace Response {
    type Raw = serializers.ConnectToRoomResponse.Raw;
}