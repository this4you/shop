import { Query } from '@tilework/opus';
import client from './api-client';
const CategoryApi = {
    getAll: async () => {
        const query = new Query('categories', true)
            .addField('name');
        return await client.post(query);
    }
}

export default CategoryApi;