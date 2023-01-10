/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { HathoraApi } from "@fern-api/hathora";
import * as core from "../../../core";

export const DeploymentId: core.schemas.Schema<serializers.DeploymentId.Raw, HathoraApi.DeploymentId> =
  core.schemas.string();

export declare namespace DeploymentId {
  type Raw = string;
}
