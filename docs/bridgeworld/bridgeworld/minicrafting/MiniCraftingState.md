# Solidity API

## MiniCraftingState

### RecruitTierInfoSet

```solidity
event RecruitTierInfoSet(uint8 tier, bool canRecruitCraft, uint16 prismShardsRequired, uint32 expGained, uint16 minRecruitLevel, uint8 fragmentsRequired)
```

### CraftingFinished

```solidity
event CraftingFinished(address _user, uint256 _legionId, uint8 _tier, uint8 _cpGained, uint256 _treasureId)
```

### crafting

```solidity
contract ICrafting crafting
```

### legion

```solidity
contract ILegion legion
```

### legionMetadataStore

```solidity
contract ILegionMetadataStore legionMetadataStore
```

### treasure

```solidity
contract ITreasure treasure
```

### treasureMetadataStore

```solidity
contract ITreasureMetadataStore treasureMetadataStore
```

### treasureFragment

```solidity
contract ITreasureFragment treasureFragment
```

### magic

```solidity
contract IMagic magic
```

### consumable

```solidity
contract IConsumable consumable
```

### treasury

```solidity
contract ITreasury treasury
```

### prismShardId

```solidity
uint256 prismShardId
```

### tierToTierInfo

```solidity
mapping(uint8 => struct FragmentTierInfo) tierToTierInfo
```

### fragmentIdToInfo

```solidity
mapping(uint256 => struct FragmentInfo) fragmentIdToInfo
```

### tierToRecruitTierInfo

```solidity
mapping(uint8 => struct RecruitTierInfo) tierToRecruitTierInfo
```

### recruitLevel

```solidity
contract IRecruitLevel recruitLevel
```

### __MiniCraftingState_init

```solidity
function __MiniCraftingState_init() internal
```

## FragmentTierInfo

```solidity
struct FragmentTierInfo {
  uint128 magicCost;
  uint16 prismShardsRequired;
  uint8 fragmentsRequired;
  uint8 craftingCPGained;
  uint8 minimumCraftingLevel;
}
```

## RecruitTierInfo

```solidity
struct RecruitTierInfo {
  bool canRecruitCraft;
  uint16 prismShardsRequired;
  uint32 expGained;
  uint16 minRecruitLevel;
  uint8 fragmentsRequired;
  uint176 emptySpace;
}
```

## FragmentInfo

```solidity
struct FragmentInfo {
  uint8 tier;
  enum TreasureCategory[] categories;
}
```

