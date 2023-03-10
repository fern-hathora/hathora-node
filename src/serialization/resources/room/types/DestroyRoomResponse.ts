/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../../core";

export const DestroyRoomResponse: core.serialization.ObjectSchema<
    serializers.DestroyRoomResponse.Raw,
    HathoraApi.DestroyRoomResponse
> = core.serialization.object({
    destroyed: core.serialization.boolean(),
});

export declare namespace DestroyRoomResponse {
    interface Raw {
        destroyed: boolean;
    }
}
