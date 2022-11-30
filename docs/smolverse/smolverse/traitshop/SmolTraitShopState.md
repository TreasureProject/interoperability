# Solidity API

## SmolTraitShopState

Shared storage layout for SmolTraitShop.

### TRAIT_LIMITED_OFFER_ID_BIT_OFFSET

```solidity
uint256 TRAIT_LIMITED_OFFER_ID_BIT_OFFSET
```

### TRAIT_TRAIT_TYPE_BIT_OFFSET

```solidity
uint256 TRAIT_TRAIT_TYPE_BIT_OFFSET
```

### TRAIT_TYPE_OFFSET

```solidity
uint256 TRAIT_TYPE_OFFSET
```

### TRAIT_GROUP_ID_BIT_OFFSET

```solidity
uint256 TRAIT_GROUP_ID_BIT_OFFSET
```

### smolBrains

```solidity
contract IERC721 smolBrains
```

### magicToken

```solidity
contract IERC20Upgradeable magicToken
```

### treasuryAddress

```solidity
address treasuryAddress
```

### userAllocationClaimed

```solidity
mapping(address => mapping(uint256 => bool)) userAllocationClaimed
```

### userLimitedOfferAllocationClaimed

```solidity
mapping(address => mapping(uint256 => mapping(uint256 => bool))) userLimitedOfferAllocationClaimed
```

### smolLimitedOfferAllocationClaimed

```solidity
mapping(uint256 => mapping(uint256 => mapping(uint256 => bool))) smolLimitedOfferAllocationClaimed
```

### limitedOfferToGroupToIds

```solidity
mapping(uint256 => mapping(uint256 => struct EnumerableSetUpgradeable.UintSet)) limitedOfferToGroupToIds
```

### latestLimitedOffer

```solidity
uint256 latestLimitedOffer
```

### baseURI

```solidity
mapping(enum ISmolTraitShop.TraitType => string) baseURI
```

### suffixURI

```solidity
mapping(enum ISmolTraitShop.TraitType => string) suffixURI
```

### traitTypeToLastId

```solidity
mapping(enum ISmolTraitShop.TraitType => uint256) traitTypeToLastId
```

### traitToInfo

```solidity
mapping(uint256 => struct ISmolTraitShop.Trait) traitToInfo
```

### traitIdsForSale

```solidity
struct EnumerableSetUpgradeable.UintSet traitIdsForSale
```

### traitIdsOwnedBySmol

```solidity
mapping(uint256 => struct EnumerableSetUpgradeable.UintSet) traitIdsOwnedBySmol
```

### smolToEquippedTraits

```solidity
mapping(uint256 => struct ISmolTraitShop.SmolBrain) smolToEquippedTraits
```

### _getLimitedOfferIdAndGroupForTrait

```solidity
function _getLimitedOfferIdAndGroupForTrait(uint256 _traitId) internal view returns (uint32 limitedOfferId_, uint8 groupId_)
```

### _getTypeForTrait

```solidity
function _getTypeForTrait(uint256 _traitId) internal view returns (enum ISmolTraitShop.TraitType traitType_)
```

### __SmolTraitShopState_init

```solidity
function __SmolTraitShopState_init() internal
```

