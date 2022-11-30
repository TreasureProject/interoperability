# Solidity API

## Middleman

### RewardsBalance

```solidity
struct RewardsBalance {
  uint256 unpaid;
  uint256 paid;
}
```

### MIDDLEMAN_ADMIN

```solidity
bytes32 MIDDLEMAN_ADMIN
```

### corruptionToken

```solidity
contract IERC20 corruptionToken
```

_Magic token addr_

### harvesterFactory

```solidity
contract IHarvesterFactory harvesterFactory
```

### masterOfCoin

```solidity
contract IMasterOfCoin masterOfCoin
```

### atlasMine

```solidity
address atlasMine
```

### atlasMineBoost

```solidity
uint256 atlasMineBoost
```

### lastRewardTimestamp

```solidity
uint256 lastRewardTimestamp
```

### rewardsBalance

```solidity
mapping(address => struct Middleman.RewardsBalance) rewardsBalance
```

### corruptionNegativeBoostMatrix

```solidity
uint256[][] corruptionNegativeBoostMatrix
```

### RewardsPaid

```solidity
event RewardsPaid(address stream, uint256 rewardsPaid, uint256 rewardsPaidInTotal)
```

### CorruptionToken

```solidity
event CorruptionToken(contract IERC20 corruptionToken)
```

### HarvesterFactory

```solidity
event HarvesterFactory(contract IHarvesterFactory harvesterFactory)
```

### AtlasMine

```solidity
event AtlasMine(address atlasMine)
```

### MasterOfCoin

```solidity
event MasterOfCoin(contract IMasterOfCoin masterOfCoin)
```

### CorruptionNegativeBoostMatrix

```solidity
event CorruptionNegativeBoostMatrix(uint256[][] _corruptionNegativeBoostMatrix)
```

### AtlasMineBoost

```solidity
event AtlasMineBoost(uint256 atlasMineBoost)
```

### runIfNeeded

```solidity
modifier runIfNeeded()
```

### constructor

```solidity
constructor() public
```

### init

```solidity
function init(address _admin, contract IMasterOfCoin _masterOfCoin, contract IHarvesterFactory _harvesterFactory, address _atlasMine, uint256 _atlasMineBoost, contract IERC20 _corruptionToken) external
```

### getHarvesterShares

```solidity
function getHarvesterShares(address _targetHarvester) public view returns (address[] allActiveHarvesters, uint256[] harvesterShare, uint256 totalShare, uint256 targetIndex)
```

_Returns share in mining power for all harvesters. To get percentage of mining power
     for given harvester do:
     `harvesterShare[i] / totalShare`, where `i` is index of harvester address in `allActiveHarvesters`
     array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _targetHarvester | address | optional parameter, you can safely use `address(0)`. If you are looking        for specific harvester, provide its address as param and `targetIndex` will return index        of harvester in question in `allActiveHarvesters` array. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| allActiveHarvesters | address[] | array of all harvesters |
| harvesterShare | uint256[] | share in mining power for each harvester in `allActiveHarvesters` array |
| totalShare | uint256 | sum of all shares (includes `atlasMineBoost` if AtlasMine is setup) |
| targetIndex | uint256 | index of `_targetHarvester` in `allActiveHarvesters` array |

### getPendingRewards

```solidity
function getPendingRewards(address _harvester) public view returns (uint256)
```

### getHarvesterEmissionsBoost

```solidity
function getHarvesterEmissionsBoost(address _harvester) public view returns (uint256)
```

### getCorruptionNegativeBoost

```solidity
function getCorruptionNegativeBoost(address _harvester) public view returns (uint256 negBoost)
```

### getUtilizationBoost

```solidity
function getUtilizationBoost(address _harvester) public view returns (uint256 utilBoost)
```

### getUtilization

```solidity
function getUtilization(address _harvester) public view returns (uint256 util)
```

### getCorruptionNegativeBoostMatrix

```solidity
function getCorruptionNegativeBoostMatrix() public view returns (uint256[][])
```

### distributeRewards

```solidity
function distributeRewards() public
```

### requestRewards

```solidity
function requestRewards() public returns (uint256 rewardsPaid)
```

### setHarvesterFactory

```solidity
function setHarvesterFactory(contract IHarvesterFactory _harvesterFactory) external
```

### setMasterOfCoin

```solidity
function setMasterOfCoin(contract IMasterOfCoin _masterOfCoin) external
```

### setCorruptionNegativeBoostMatrix

```solidity
function setCorruptionNegativeBoostMatrix(uint256[][] _corruptionNegativeBoostMatrix) external
```

### setAtlasMineBoost

```solidity
function setAtlasMineBoost(uint256 _atlasMineBoost) external
```

