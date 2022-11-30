# Solidity API

## StakingRulesBase

### SR_ADMIN

```solidity
bytes32 SR_ADMIN
```

### SR_NFT_HANDLER

```solidity
bytes32 SR_NFT_HANDLER
```

### SR_HARVESTER_FACTORY

```solidity
bytes32 SR_HARVESTER_FACTORY
```

_temporary role assigned to harvester factory to setup nftHandler after it's deployed
     (solves circular dependency)_

### nftHandler

```solidity
contract INftHandler nftHandler
```

### constructor

```solidity
constructor() internal
```

### _initStakingRulesBase

```solidity
function _initStakingRulesBase(address _admin, address _harvesterFactory) internal
```

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

### setNftHandler

```solidity
function setNftHandler(address _nftHandler) external
```

Set nftHandler address

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _nftHandler | address | address |

### _processStake

```solidity
function _processStake(address, address, uint256, uint256) internal virtual
```

_it's meant to be overridden by staking rules implementation_

### _processUnstake

```solidity
function _processUnstake(address, address, uint256, uint256) internal virtual
```

_it's meant to be overridden by staking rules implementation_

