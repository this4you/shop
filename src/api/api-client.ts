import { client } from '@tilework/opus';

client.setEndpoint(process.env.REACT_APP_API_URL  || "");

export default client;