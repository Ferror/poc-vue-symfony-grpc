// import { Product, Void } from '@/proto/Product_pb.js'
import { ProductServicePromiseClient } from '@/proto/Product_grpc_web_pb.js'


export default {
    create: async function () {

        var a = new ProductServicePromiseClient;
        const product = await a.create();

        return product
    }
}
