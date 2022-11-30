# Solidity API

## SummoningState

### SummoningStarted

```solidity
event SummoningStarted(address _user, uint256 _tokenId, uint256 _requestId, uint256 _finishTime)
```

### NoSummoningToFinish

```solidity
event NoSummoningToFinish(address _user)
```

### SummoningFinished

```solidity
event SummoningFinished(address _user, uint256 _returnedId, uint256 _newTokenId, uint256 _newTokenSummoningCooldown)
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### magic

```solidity
contract IMagic magic
```

### lp

```solidity
contract ILP lp
```

### treasury

```solidity
contract ITreasury treasury
```

### consumable

```solidity
contract IConsumable consumable
```

### tokenIdToSummonCount

```solidity
mapping(uint256 => uint32) tokenIdToSummonCount
```

### summoningDuration

```solidity
uint256 summoningDuration
```

### generationToMaxSummons

```solidity
mapping(enum LegionGeneration => uint32) generationToMaxSummons
```

### rarityToGenerationToOddsPerRarity

```solidity
mapping(enum LegionRarity => mapping(enum LegionGeneration => mapping(enum LegionRarity => uint256))) rarityToGenerationToOddsPerRarity
```

### generationToLPRequiredSteps

```solidity
mapping(enum LegionGeneration => struct SummoningStep[]) generationToLPRequiredSteps
```

### chanceAzuriteDustDrop

```solidity
uint256 chanceAzuriteDustDrop
```

### userToSummoningsInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToSummoningsInProgress
```

### tokenIdToSummonStartTime

```solidity
mapping(uint256 => uint256) tokenIdToSummonStartTime
```

### tokenIdToRequestId

```solidity
mapping(uint256 => uint256) tokenIdToRequestId
```

### tokenIdToLPStaked

```solidity
mapping(uint256 => uint256) tokenIdToLPStaked
```

### tokenIdToCrystalIdUsed

```solidity
mapping(uint256 => uint256) tokenIdToCrystalIdUsed
```

### tokenIdToCreatedTime

```solidity
mapping(uint256 => uint256) tokenIdToCreatedTime
```

### crystalIds

```solidity
struct EnumerableSetUpgradeable.UintSet crystalIds
```

### crystalIdToChangedOdds

```solidity
mapping(uint256 => uint256[3]) crystalIdToChangedOdds
```

### summoningFatigueCooldown

```solidity
uint256 summoningFatigueCooldown
```

### azuriteDustId

```solidity
uint256 azuriteDustId
```

### generationToMagicCost

```solidity
mapping(enum LegionGeneration => uint256) generationToMagicCost
```

### isSummoningPaused

```solidity
bool isSummoningPaused
```

### successSensitivity

```solidity
uint256 successSensitivity
```

### summoningDurationIfFailed

```solidity
uint256 summoningDurationIfFailed
```

### tokenIdToSuccessRate

```solidity
mapping(uint256 => uint256) tokenIdToSuccessRate
```

### tokenIdToMagicAmount

```solidity
mapping(uint256 => uint256) tokenIdToMagicAmount
```

### crystalIdToTimeReduction

```solidity
mapping(uint256 => uint256) crystalIdToTimeReduction
```

### crafting

```solidity
contract ICrafting crafting
```

### balancerCrystal

```solidity
contract IBalancerCrystal balancerCrystal
```

### balancerCrystalId

```solidity
uint256 balancerCrystalId
```

### __SummoningState_init

```solidity
function __SummoningState_init() internal
```

## SummoningStep

```solidity
struct SummoningStep {
  uint256 value;
  uint32 minSummons;
  uint32 maxSummons;
}
```

