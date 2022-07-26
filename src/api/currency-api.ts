import { Query } from '@tilework/opus';
import client from './api-client';

const CarrencyApi = {
    getAll: async () => {
        const query = new Query('currencies', true)
            .addFieldList(['label', 'symbol']);
        return await client.post(query);
    }
}

export default CarrencyApi;