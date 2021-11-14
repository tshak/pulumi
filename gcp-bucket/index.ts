import * as storage from "@pulumi/google-native/storage/v1";
import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const bucketName = `platpoc-${config.require("bucketName")}`;

const bucket = new storage.Bucket("bucket", {
  name: bucketName
});

export const bucketLink = bucket.selfLink;