# Solidity API

## MiniCrafting

### initialize

```solidity
function initialize() external
```

### setRecruitTierInfo

```solidity
function setRecruitTierInfo(uint8 _tier, bool _canRecruitCraft, uint16 _prismShardsRequired, uint32 _expGained, uint16 _minRecruitLevel, uint8 _fragmentsRequired) external
```

### updateCraftingLevelRequirements

```solidity
function updateCraftingLevelRequirements(uint8[5] _minimumLevelPerTier) external
```

### updateCraftingXpGain

```solidity
function updateCraftingXpGain(uint8[5] _xpAmts) external
```

### updateMagicCosts

```solidity
function updateMagicCosts(uint128[5] _magicCosts) external
```

### craftTreasures

```solidity
function craftTreasures(struct CraftTreasureParams[] _craftTreasureParams) external
```

### _craftTreasure

```solidity
function _craftTreasure(struct CraftTreasureParams _craftTreasureParam, uint256 _randomNumber) private
```

### _craftTreasureRecruit

```solidity
function _craftTreasureRecruit(struct CraftTreasureParams _craftTreasureParam, uint256 _randomNumber, struct FragmentInfo _fragmentInfo) private
```

### _craftTreasureRegular

```solidity
function _craftTreasureRegular(struct CraftTreasureParams _craftTreasureParam, struct LegionMetadata _legionMetadata, uint256 _randomNumber, struct FragmentInfo _fragmentInfo) private
```

### _determineTreasureCategory

```solidity
function _determineTreasureCategory(enum TreasureCategory[] _categories, uint256 _randomNumber) private view returns (enum TreasureCategory)
```

### _burnShardsAndFragments

```solidity
function _burnShardsAndFragments(uint256 _prismShardsAmount, uint256 _treasureFragmentId, uint256 _fragmentsAmount) private
```

### _mintTreasure

```solidity
function _mintTreasure(struct FragmentInfo _fragmentInfo, uint256 _randomNumber) private returns (uint256)
```

### _getPseudoRandomNumber

```solidity
function _getPseudoRandomNumber() private view returns (uint256)
```

## CraftTreasureParams

```solidity
struct CraftTreasureParams {
  uint128 legionId;
  uint128 treasureFragmentId;
}
```

