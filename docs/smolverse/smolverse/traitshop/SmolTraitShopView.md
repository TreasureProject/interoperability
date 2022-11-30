# Solidity API

## SmolTraitShopView

External and internal view functions used by SmolTraitShop.

### getEquippedTraits

```solidity
function getEquippedTraits(uint256 _smolId) external view returns (struct ISmolTraitShop.SmolBrain)
```

Get SmolBrain struct with all currently equipped traits for selected smol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ISmolTraitShop.SmolBrain | SmolBrain struct with trait id numbers that have been equipped to a smol. |

### getTraitInfo

```solidity
function getTraitInfo(uint256 _traitId) external view returns (struct ISmolTraitShop.Trait)
```

Get all info for a specific trait.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _traitId | uint256 | Id number of specifiic trait. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct ISmolTraitShop.Trait | Trait struct containing all info for a selected trait id. |

### getTraitsOwnedBySmol

```solidity
function getTraitsOwnedBySmol(uint256 _smolId) external view returns (uint256[])
```

Get all trait ids for a trait type that are currently owned by selected smol.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | Array containing trait id numbers that have been unlocked for smol. |

### getTraitsForSale

```solidity
function getTraitsForSale(enum ISmolTraitShop.TraitType _traitType) external view returns (uint256[] traitTypeForSale_)
```

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| traitTypeForSale_ | uint256[] | containing trait id numbers that can be bought for that trait type. |

### getAllTieredTraitsPerEvent

```solidity
function getAllTieredTraitsPerEvent(uint256 _limitedOfferId) external view returns (uint256[] subgroup1, uint256[] subgroup2, uint256[] subgroup3)
```

Get all trait ids that have been added to subgroups for a given event number and trait type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _limitedOfferId | uint256 | Number associated with the event where trait subgroups were decided. (1 = smoloween) |

### _checkBeforePurchase

```solidity
function _checkBeforePurchase(address _userAddress, uint256 _smolId, uint256 _traitId) internal view returns (uint256 price)
```

_Various checks that must be made before any trait purchase._

### _checkSmolOwnership

```solidity
function _checkSmolOwnership(address _userAddress, uint256 _smolId) internal view
```

_Verify user is owner of smol._

### _checkMagicBalance

```solidity
function _checkMagicBalance(address _userAddress, uint256 _amount) internal view
```

_Check balance of magic for user._

### _checkWhitelistStatus

```solidity
function _checkWhitelistStatus(address _userAddress, bytes32[] _proof, uint256 _traitId, uint256 _limitedOfferId, uint256 _groupId) internal view
```

_Verify merkle proof for user and check if allocation has been claimed._

### _checkBeforeEquip

```solidity
function _checkBeforeEquip(uint256 _smolId, uint256 _traitId) internal view
```

_Check used for ownership when equipping upgrades._

### _isTraitInType

```solidity
function _isTraitInType(enum ISmolTraitShop.TraitType _traitType, uint256 _traitId) internal pure returns (bool isInType_)
```

### __SmolTraitShopView_init

```solidity
function __SmolTraitShopView_init() internal
```

