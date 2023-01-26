export const API_BASE_URL =
    process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote' ?
    'http://localhost:8888/api/' :
    'http://localhost:8888/api/';
export const DOWNLOAD_BASE_URL =
    process.env.NODE_ENV == 'production' || process.env.REACT_APP_DEV_REMOTE == 'remote' ?
    'http://localhost:8888/download/' :
    'http://localhost:8888/download/';
export const ACCESS_TOKEN_NAME = 'x-auth-token';