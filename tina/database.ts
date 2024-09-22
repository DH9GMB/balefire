import { createDatabase, createLocalDatabase } from "@tinacms/datalayer";
import { MongodbLevel } from "mongodb-level";
import { GitHubProvider } from "tinacms-gitprovider-github";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.TINA_PUBLIC_IS_LOCAL) {
  console.warn("TINA_PUBLIC_IS_LOCAL is not defined")
}

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI must be defined")
}

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.GITHUB_REF ||
  process.env.HEAD ||
  "main";

export default isLocal
  ? createLocalDatabase()
  : createDatabase({
      gitProvider: new GitHubProvider({
        branch,
        owner: process.env.GITHUB_OWNER!,
        repo: process.env.GITHUB_REPO!,
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN!,
      }),
      databaseAdapter: new MongodbLevel<string, Record<string, unknown>>({
        collectionName: 'tinacms',
        dbName: "tinacms-self-host",
        mongoUri: process.env.MONGODB_URI!,
      }),
      namespace: branch,
    });