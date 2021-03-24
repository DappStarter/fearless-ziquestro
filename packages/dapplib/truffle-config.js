require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid climb frame sugar fire ridge remove essay imitate private fresh trumpet'; 
let testAccounts = [
"0x69c6aec8af4dc83a9f318291302500cf2043e6f76526148f4132375e87ee05a7",
"0xf7c63b975a742127e7a4a8daabaadad71707238b185d7c84b0109ac5c6d7890f",
"0x64647c697dcd7b08aba34d44a6db65843f4c76a83f5cd2633adb3134cd7f7a0b",
"0xe6b94cfc8b54e5d4c0bb62eb025ea8f314decd567314bdbd343a44aeb821eb7b",
"0xdee0d59539b212b87cee8965832e8226f0431914478e048b42054500dc8a3dca",
"0xa48f0035069eebeef146ac4208e16ab70a8c000e431ceedb1e0b50877eac19a4",
"0x563a0213412d836a504852048a8a54907cd5e0cc473dd04ada5fff5ddcbaa105",
"0x08f8d87f7cb1f85f367b7f3cf62753177585ac6f19dd833e198d068d1bc3e091",
"0xa7a930efd05546b66d71078f01fbe983903d6302c8eb0ac2d7c5325af23095f7",
"0x05aee0ed77c7c962be0dcc79bc733c9478d7e79cb467db01e738208f005ca7b8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

