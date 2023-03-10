/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.app.get.Response.Raw, HathoraApi.GetAppResponse> =
    core.serialization.lazyObject(async () => (await import("../../..")).GetAppResponse);

export declare namespace Response {
    type Raw = serializers.GetAppResponse.Raw;
}
