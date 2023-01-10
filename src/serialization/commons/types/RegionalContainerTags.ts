/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../core";

export const RegionalContainerTags: core.schemas.ObjectSchema<
  serializers.RegionalContainerTags.Raw,
  HathoraApi.RegionalContainerTags
> = core.schemas.object({
  region: core.schemas.lazy(async () => (await import("../..")).Region),
  containerTag: core.schemas.string(),
});

export declare namespace RegionalContainerTags {
  interface Raw {
    region: serializers.Region.Raw;
    containerTag: string;
  }
}
