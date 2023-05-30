const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList.json");

merk = new MerkleTree(niceList);
console.log(merk.getRoot());
