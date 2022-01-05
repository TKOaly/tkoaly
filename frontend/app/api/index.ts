import { GraphQLClient } from "graphql-request";
import { getSdk } from "./cms.sdk";

export const sdk = () => {
    const client = new GraphQLClient("http://localhost:3001/api/graphql");
    return getSdk(client); 
}