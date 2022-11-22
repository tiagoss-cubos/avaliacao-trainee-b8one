import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signIN($input: SignInInput!) {
    signIn(input: $input) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;
