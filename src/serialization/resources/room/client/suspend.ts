/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.room.suspend.Response.Raw,
    HathoraApi.SuspendRoomResponse
> = core.serialization.lazyObject(async () => (await import("../../..")).SuspendRoomResponse);

export declare namespace Response {
    type Raw = serializers.SuspendRoomResponse.Raw;
}
