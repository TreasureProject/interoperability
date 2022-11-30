# Solidity API

## SummoningSettings

### __SummoningSettings_init

```solidity
function __SummoningSettings_init() internal
```

### setIsSummoningPaused

```solidity
function setIsSummoningPaused(bool _isSummoningPaused) external
```

### setSuccessSensitivity

```solidity
function setSuccessSensitivity(uint256 _successSensitivity) external
```

### setSummoningDurationIfFailed

```solidity
function setSummoningDurationIfFailed(uint256 _summoningDurationIfFailed) external
```

### setBalancerCrystalId

```solidity
function setBalancerCrystalId(uint256 _balancerCrystalId) external
```

### setSimpleSettings

```solidity
function setSimpleSettings(uint256 _summoningDuration, uint256 _genesisMagicCost, uint256 _auxiliaryMagicCost, uint32 _auxiliaryMaxSummons, uint32 _genesisMaxSummons, uint256 _chanceAzuriteDustDrop, uint256 _azuriteDustId) external
```

### setBCSteps

```solidity
function setBCSteps(struct SummoningStep[] _auxiliarySteps, struct SummoningStep[] _genesisSteps) external
```

### setCrystalOdds

```solidity
function setCrystalOdds(uint256[] _crystalIds, uint256[] _crystalTimeReductions, uint256[3][] _crystalIdToOdds) external
```

### setSummoningOdds

```solidity
function setSummoningOdds(enum LegionRarity[] _inputRarities, uint256[] _genesisOdds, uint256[] _auxiliaryOdds) external
```

### setSummoningFatigue

```solidity
function setSummoningFatigue(uint256 _summoningFatigueCooldown) external
```

