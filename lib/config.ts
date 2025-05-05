const PROJECT_ID: string | undefined =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET: string | undefined = process.env.NEXT_PUBLIC_SANITY_DATASET;
const TOKEN: string | undefined = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const REGION: string | undefined = process.env.NEXT_PUBLIC_REGION;
const IDENTIFY_POOL_ID: string | undefined =
  process.env.NEXT_PUBLIC_IDENTIFY_POOL_ID;
const USER_POOL_ID: string | undefined = process.env.NEXT_PUBLIC_USER_POOL_ID;
const CLIENT_ID: string | undefined = process.env.NEXT_PUBLIC_CLIENT_ID;
const BACKEND_URL: string | undefined = process.env.NEXT_PUBLIC_BACKEND_URL;
const FRONTEND_URL: string | undefined = process.env.NEXT_PUBLIC_FRONTEND_URL;
const SECRET_KEY: string | undefined = process.env.NEXT_PUBLIC_AWS_SECRET_KEY;
const ACCESS_KEY: string | undefined = process.env.NEXT_PUBLIC_ACCESS_KEY;
const BUCKET_NAME: string | undefined = process.env.NEXT_PUBLIC_BUCKET_NAME;
const SUBS_ID: string | undefined = process.env.NEXT_PUBLIC_PUSH_ALERT_SUBS_ID;
const LOCAL: string | undefined = process.env.NEXT_PUBLIC_LOCAL;
const POSTHOG_KEY: string | any = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST: string | any = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const EASYBLOCKS_ACCESS_TOKEN: string | any =
  process.env.NEXT_PUBLIC_EASYBLOCKS_ACCESS_TOKEN;
const EASYBLOCKS_PROJECT_ID: string | any =
  process.env.NEXT_PUBLIC_EASYBLOCKS_PROJECT_ID;
const API_VERSION: string | any = process.env.NEXT_PUBLIC_API_VERSION;

export const config = {
  isLocal: LOCAL === "true",
  projectId: PROJECT_ID,
  dataSet: DATASET,
  token: TOKEN,
  backendUrl: String(BACKEND_URL),
  frontendUrl: FRONTEND_URL,
  bucketName: BUCKET_NAME,
  subsId: SUBS_ID,
  posthogHost: POSTHOG_HOST,
  posthogKey: POSTHOG_KEY,
  amplify: {
    aws_project_region: REGION,
    aws_cognito_identity_pool_id: IDENTIFY_POOL_ID,
    aws_cognito_region: REGION,
    aws_user_pools_id: USER_POOL_ID,
    aws_user_pools_web_client_id: CLIENT_ID,
    aws_secret_key: SECRET_KEY,
    aws_access_key: ACCESS_KEY,
    federationTarget: "COGNITO_USER_POOLS",
  },
  easyBlocks: {
    accessToken: EASYBLOCKS_ACCESS_TOKEN,
    projectId: EASYBLOCKS_PROJECT_ID,
  },
  apiVersion: API_VERSION,
};
