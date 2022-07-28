import { Field, Query } from '@tilework/opus';
import client from './api-client';

const ProductApi = {
    getAll: async (currentCategory = "all") => {
        const query = new Query('category')
            .addArgument("input", "CategoryInput", { title: currentCategory })
            .addField(
                new Field("products", true)
                    .addFieldList(["id", "name", "gallery", "inStock"])
                    .addField(
                        new Field("prices", true)
                            .addField("amount")
                            .addField(
                                new Field("currency")
                                    .addField("symbol")
                            )
                    )
            );
        return await client.post(query);
    }
}

export default ProductApi;