# Solidity API

## TreasureTriadState

### TreasureCardInfoSet

```solidity
event TreasureCardInfoSet(uint256 _treasureId, struct CardInfo _cardInfo)
```

### NUMBER_OF_CONTRACT_CARDS

```solidity
uint8 NUMBER_OF_CONTRACT_CARDS
```

### NUMBER_OF_CELLS_WITH_AFFINITY

```solidity
uint8 NUMBER_OF_CELLS_WITH_AFFINITY
```

### MAX_NUMBER_OF_CORRUPTED_CELLS

```solidity
uint8 MAX_NUMBER_OF_CORRUPTED_CELLS
```

### advancedQuesting

```solidity
contract IAdvancedQuestingDiamond advancedQuesting
```

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### classToTreasureCategoryToHasAffinity

```solidity
mapping(enum LegionClass => mapping(enum TreasureCategory => bool)) classToTreasureCategoryToHasAffinity
```

### treasureIds

```solidity
struct EnumerableSetUpgradeable.UintSet treasureIds
```

### treasureIdToCardInfo

```solidity
mapping(uint256 => struct CardInfo) treasureIdToCardInfo
```

### baseTreasureRarityPerTier

```solidity
uint8[5] baseTreasureRarityPerTier
```

### numberOfFlippedCardsToWin

```solidity
uint8 numberOfFlippedCardsToWin
```

### randomizer

```solidity
contract IRandomizer randomizer
```

### __TreasureTriadState_init

```solidity
function __TreasureTriadState_init() internal
```

### _setInitialClassToCategory

```solidity
function _setInitialClassToCategory() private
```

## CardInfo

```solidity
struct CardInfo {
  enum TreasureCategory category;
  uint8 north;
  uint8 east;
  uint8 south;
  uint8 west;
}
```

