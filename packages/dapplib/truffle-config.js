require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food elbow device night essay hen light army gather'; 
let testAccounts = [
"0xfd62bb63f7d0832b183390120bcf1717f2f576190a50ab133f1ac5a574f715c2",
"0x7cdaf21f4322c5ce681c8059a7625d57708e3f88abadc40d374a7a951107680a",
"0x693954314521b82787fda2531a65b1bc870d3717d64d7e7994fe70b4ef3e3ce1",
"0x97f38fad7d17711fc8186a41ea80a82c758808f824082f38d5fe2c6f3bd54165",
"0xc181c79c1e7ee507870b30062dae6d730bd2be521a91d5d925aa323b2a7f4f58",
"0xd631bfb4bcb46353c6cdabfb0405f9522d69409ab09414dd4e161ab70cf52c8f",
"0x6d4aefa272f2829ac01e0a1d41382af25b7b7b36c4a1a13cd9121e7e801a7f5a",
"0x0dca40a11273c8e6f7707be295c6fbee3e2554ab6493d92538319fddde7698e9",
"0x57d3b22abe2a8a1a6abea35477433b08e306921cdae403da1f389eae56ed32b0",
"0x8ac4c95605701dbcd2eddb0e3bae653c2ea92b4054a6d5e8906c4dbf6742d818"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
