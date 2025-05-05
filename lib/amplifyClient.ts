import { Amplify } from "aws-amplify";

Amplify.configure({
  aws_project_region: process.env.NEXT_PUBLIC_COGNITO_REGION,
  aws_cognito_identity_pool_id: process.env.NEXT_PUBLIC_IDENTIFY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_WEB_CLIENT_ID,
  federationTarget: "COGNITO_USER_POOLS",
  // ssr: true, // Important for App Router SSR
});
