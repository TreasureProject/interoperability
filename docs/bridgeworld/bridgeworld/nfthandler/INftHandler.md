# Solidity API

## INftHandler

### Interfaces

```solidity
enum Interfaces {
  Unsupported,
  ERC721,
  ERC1155
}
```

### NftConfig

```solidity
struct NftConfig {
  enum INftHandler.Interfaces supportedInterface;
  contract IStakingRules stakingRules;
}
```

### init

```solidity
function init(address _admin, address _harvester, address[] _nfts, uint256[] _tokenIds, struct INftHandler.NftConfig[] _nftConfigs) external
```

Initialize contract

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _admin | address | wallet address to be set as contract's admin |
| _harvester | address | harvester address for which INftHandler is deployed |
| _nfts | address[] | array of NFTs allowed to be staked |
| _tokenIds | uint256[] | array of tokenIds allowed to be staked, it should correspond to `_nfts` |
| _nftConfigs | struct INftHandler.NftConfig[] | array of configs for each NFT |

### harvester

```solidity
function harvester() external view returns (contract IHarvester)
```

Gets harvester address linked to this contract

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IHarvester | Harvester interface |

### getStakingRules

```solidity
function getStakingRules(address _nft, uint256 _tokenId) external view returns (contract IStakingRules)
```

Gets staking rules contract address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nft | address | NFT contract address for which to read staking rules contract address |
| _tokenId | uint256 | token id for which to read staking rules contract address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | contract IStakingRules | staking rules contract address |

### getUserBoost

```solidity
function getUserBoost(address _user) external view returns (uint256)
```

Gets cached user boost

_Cached boost is re-calculated on the fly on stake and unstake NFT by user_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | cached user boost as percentage, 1e18 == 100% |

### getNftBoost

```solidity
function getNftBoost(address _user, address _nft, uint256 _tokenId, uint256 _amount) external view returns (uint256)
```

Gets given NFT boost for user

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _user | address | user's wallet address |
| _nft | address | address of NFT contract |
| _tokenId | uint256 | token Id of NFT for which to calculate the boost |
| _amount | uint256 | amount of tokens for which to calculate boost, must be 1 for ERC721 |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | calculated boost for given NFT for given user as percentage, 1e18 == 100% |

### getHarvesterTotalBoost

```solidity
function getHarvesterTotalBoost() external view returns (uint256 boost)
```

Gets harvester boost to calculate rewards allocation

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| boost | uint256 | calculated harvester boost to calculate rewards allocation |

