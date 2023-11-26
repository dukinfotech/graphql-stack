
import type { CodegenConfig } from '@graphql-codegen/cli';

// https://the-guild.dev/graphql/codegen/docs/getting-started
const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      "http://localhost:8888/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": "undersecretary"
        },
      },
    },
  ],
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
