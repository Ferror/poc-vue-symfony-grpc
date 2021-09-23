import { Message } from '@/contract/service_pb.js'
import { EchoClient } from '@/contract/service_grpc_web_pb.js'

export default {
    ping: async function () {
        let message = new Message();
        message.setMsg("My Custom Message");

        await EchoClient.ping(message);
    }
}
