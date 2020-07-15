import { request } from 'graphql-request';

const API = 'https://star-citizen-info.herokuapp.com/v1/graphql';
const fetcher = (query: string) => request(API, query);

export default fetcher;
