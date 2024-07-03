import OakHelper from './lib/OakHelper.js';


const main = async () => {
    const oakHelper = new OakHelper({ endpoint: 'wss://rpc.turing.oak.tech' });
    await oakHelper.initialize();
}

main().catch(console.error).finally(() => {
    console.log('Reached the end of main() ...');
    process.exit();
});
