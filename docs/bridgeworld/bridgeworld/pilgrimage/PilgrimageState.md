# Solidity API

## PilgrimageState

### PilgrimagesStarted

```solidity
event PilgrimagesStarted(address _user, address _legionContract, uint256 _finishTime, uint256[] _ids1155, uint256[] _amounts1155, uint256[] _pilgrimageIds)
```

### NoPilgrimagesToFinish

```solidity
event NoPilgrimagesToFinish(address _user)
```

### PilgrimagesFinished

```solidity
event PilgrimagesFinished(address _user, uint256[] _tokenIds, uint256[] _finishedPilgrimageIds)
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

### legion1155

```solidity
contract ILegion1155 legion1155
```

### legionGenesis1155

```solidity
contract ILegion1155 legionGenesis1155
```

### starlightTemple

```solidity
contract IStarlightTemple starlightTemple
```

### legion1155Ids

```solidity
struct EnumerableSetUpgradeable.UintSet legion1155Ids
```

### legionIdToRarity

```solidity
mapping(uint256 => enum LegionRarity) legionIdToRarity
```

### legionIdToClass

```solidity
mapping(uint256 => enum LegionClass) legionIdToClass
```

### legionIdToChanceConstellationUnlocked

```solidity
mapping(uint256 => uint256) legionIdToChanceConstellationUnlocked
```

### legionIdToNumberConstellationUnlocked

```solidity
mapping(uint256 => uint8) legionIdToNumberConstellationUnlocked
```

### pilgrimageID

```solidity
uint256 pilgrimageID
```

### userToPilgrimagesInProgress

```solidity
mapping(address => struct EnumerableSetUpgradeable.UintSet) userToPilgrimagesInProgress
```

### pilgrimageIdToStartTime

```solidity
mapping(uint256 => uint256) pilgrimageIdToStartTime
```

### pilgrimageIdToRarity

```solidity
mapping(uint256 => enum LegionRarity) pilgrimageIdToRarity
```

### pilgrimageIdToClass

```solidity
mapping(uint256 => enum LegionClass) pilgrimageIdToClass
```

### pilgrimageIdToGeneration

```solidity
mapping(uint256 => enum LegionGeneration) pilgrimageIdToGeneration
```

### pilgrimageIdToOldId

```solidity
mapping(uint256 => uint256) pilgrimageIdToOldId
```

### pilgrimageIdToRequestId

```solidity
mapping(uint256 => uint256) pilgrimageIdToRequestId
```

### pilgrimageIdToChanceConstellationUnlocked

```solidity
mapping(uint256 => uint256) pilgrimageIdToChanceConstellationUnlocked
```

### pilgrimageIdToNumberConstellationUnlocked

```solidity
mapping(uint256 => uint8) pilgrimageIdToNumberConstellationUnlocked
```

### pilgrimageLength

```solidity
uint256 pilgrimageLength
```

### __PilgrimageState_init

```solidity
function __PilgrimageState_init() internal
```

