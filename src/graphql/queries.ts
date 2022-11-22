import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIn($input: SignInInput!) {
    signIn(input: $input) {
      token
      user {
        email
        name
      }
    }
  }
`;
