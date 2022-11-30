# Solidity API

## IStakingRules

### processStake

```solidity
function processStake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be staked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is staking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of staked NFT |
| _amount | uint256 | number of NFTs staked, must be 1 for ERC721 |

### processUnstake

```solidity
function processUnstake(address _user, address _nft, uint256 _tokenId, uint256 _amount) external
```

Checks if NFT can be unstaked

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet that is unstaking the NFT |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of unstaked NFT |
| _amount | uint256 | number of NFTs unstaked, must be 1 for ERC721 |

### getUserBoost

```solidity
function getUserBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) external view returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | wallet for which to calculate boost |
| _nft | address | NFT address, can be either ERC721 or ERC1155 |
| _tokenId | uint256 | token Id of NFT |
| _amount | uint256 | number of NFTs for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | boost amount that user gets by staking NFT(s) |

### getHarvesterBoost

```solidity
function getHarvesterBoost() external view returns (uint256)
```

Gets amount of boost that harvester gets for all staked NFTs

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | amount of boost that harvester gets for all staked NFTs |

### setNftHandler

```solidity
function setNftHandler(address _nftHandler) external
```

Set nftHandler address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftHandler | address | address |

