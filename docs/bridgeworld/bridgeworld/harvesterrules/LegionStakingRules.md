# Solidity API

## LegionStakingRules

### staked

```solidity
uint256 staked
```

### maxStakeableTotal

```solidity
uint256 maxStakeableTotal
```

### maxLegionWeight

```solidity
uint256 maxLegionWeight
```

### totalRank

```solidity
uint256 totalRank
```

### boostFactor

```solidity
uint256 boostFactor
```

### legionBoostMatrix

```solidity
uint256[][] legionBoostMatrix
```

### legionWeightMatrix

```solidity
uint256[][] legionWeightMatrix
```

### legionRankMatrix

```solidity
uint256[][] legionRankMatrix
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### weightStaked

```solidity
mapping(address => uint256) weightStaked
```

_maps user wallet to current staked weight. For weight values, see getWeight_

### paused

```solidity
bool paused
```

### MaxWeight

```solidity
event MaxWeight(uint256 maxLegionWeight)
```

### LegionMetadataStore

```solidity
event LegionMetadataStore(contract ILegionMetadataStore legionMetadataStore)
```

### MaxStakeableTotal

```solidity
event MaxStakeableTotal(uint256 maxStakeableTotal)
```

### BoostFactor

```solidity
event BoostFactor(uint256 boostFactor)
```

### Pause

```solidity
event Pause()
```

### Unpause

```solidity
event Unpause()
```

### LegionBoostMatrix

```solidity
event LegionBoostMatrix(uint256[][] legionBoostMatrix)
```

### LegionWeightMatrix

```solidity
event LegionWeightMatrix(uint256[][] legionWeightMatrix)
```

### LegionRankMatrix

```solidity
event LegionRankMatrix(uint256[][] legionRankMatrix)
```

### TotalRankUpdate

```solidity
event TotalRankUpdate(uint256 oldTotalRank, uint256 newTotalRank)
```

### MaxWeightReached

```solidity
error MaxWeightReached()
```

### Paused

```solidity
error Paused()
```

### Unpaused

```solidity
error Unpaused()
```

### init

```solidity
function init(address _admin, address _harvesterFactory, contract ILegionMetadataStore _legionMetadataStore, uint256 _maxLegionWeight, uint256 _maxStakeableTotal, uint256 _boostFactor) external
```

### getLegionBoostMatrix

```solidity
function getLegionBoostMatrix() public view returns (uint256[][])
```

### getLegionWeightMatrix

```solidity
function getLegionWeightMatrix() public view returns (uint256[][])
```

### getLegionRankMatrix

```solidity
function getLegionRankMatrix() public view returns (uint256[][])
```

### getUserBoost

```solidity
function getUserBoost(address, address, uint256 _tokenId, uint256) external view returns (uint256)
```

Gets amount of boost that user gets by staking given NFT

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
|  | address |  |
|  | address |  |
| _tokenId | uint256 | token Id of NFT |
|  | uint256 |  |

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

### getLegionBoost

```solidity
function getLegionBoost(uint256 _legionGeneration, uint256 _legionRarity) public view returns (uint256)
```

### getRank

```solidity
function getRank(uint256 _tokenId) public view returns (uint256)
```

### getWeight

```solidity
function getWeight(uint256 _tokenId) public view returns (uint256)
```

### _processStake

```solidity
function _processStake(address _user, address, uint256 _tokenId, uint256) internal
```

### _processUnstake

```solidity
function _processUnstake(address _user, address, uint256 _tokenId, uint256) internal
```

### setLegionMetadataStore

```solidity
function setLegionMetadataStore(contract ILegionMetadataStore _legionMetadataStore) external
```

### setLegionBoostMatrix

```solidity
function setLegionBoostMatrix(uint256[][] _legionBoostMatrix) external
```

### setLegionWeightMatrix

```solidity
function setLegionWeightMatrix(uint256[][] _legionWeightMatrix) external
```

### setLegionRankMatrix

```solidity
function setLegionRankMatrix(uint256[][] _legionRankMatrix) external
```

_changing ranks values after NFTs are already staked can break `totalRank` calculations_

### setMaxWeight

```solidity
function setMaxWeight(uint256 _maxLegionWeight) external
```

### setMaxStakeableTotal

```solidity
function setMaxStakeableTotal(uint256 _maxStakeableTotal) external
```

### setBoostFactor

```solidity
function setBoostFactor(uint256 _boostFactor) external
```

### pause

```solidity
function pause() external
```

### unpause

```solidity
function unpause() external
```

### setTotalRank

```solidity
function setTotalRank(uint256 _totalRank) external
```

### _setMaxWeight

```solidity
function _setMaxWeight(uint256 _maxLegionWeight) internal
```

### _setMaxStakeableTotal

```solidity
function _setMaxStakeableTotal(uint256 _maxStakeableTotal) internal
```

### _setBoostFactor

```solidity
function _setBoostFactor(uint256 _boostFactor) internal
```

### setUserWeights

```solidity
function setUserWeights(struct UserWeight[] _userWeights) external
```

## UserWeight

```solidity
struct UserWeight {
  address user;
  uint96 weight;
}
```

