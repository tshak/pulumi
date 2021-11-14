import * as storage from "@pulumi/google-native/storage/v1";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config("google-native");
const project = config.require("project");
const bucketName = `platpoc-${config.require("bucketName")}`;

const bucket = new storage.Bucket("bucket", {
  name: bucketName,
  project: project,
});

export const bucketLink = bucket.selfLink;