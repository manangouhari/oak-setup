import "@oak-network/api-augment";
import { rpc, types, runtime } from '@oak-network/types';
import { ApiPromise, WsProvider } from '@polkadot/api';


class OakHelper {
    constructor(config) {
        this.config = config;
    }

    initialize = async () => {
        const api = await ApiPromise.create({ provider: new WsProvider(this.config.endpoint), rpc, types, runtime });
        this.api = api;
    };

    getApi = () => this.api;

    disconnect = async () => {
        this.api.disconnect();
    };
}

export default OakHelper;