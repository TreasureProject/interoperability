# Solidity API

## SmolTraitShop

Store front for users to purchase and equip traits for Smol Brains.

### buyTrait

```solidity
function buyTrait(uint256 _smolId, uint256 _traitId) external
```

Unlock individual trait for a Smol Brain.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### buyTraitBatch

```solidity
function buyTraitBatch(uint256[] _smolIds, uint256[] _traitIds) external
```

Unlock individual trait for multiple Smols or multiple traits for single Smol. Can be any trait slot or even multiples of one trait type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolIds | uint256[] | Array of id numbers for selected Smol Brain tokens. |
| _traitIds | uint256[] | Array of id numbers for selected traits. |

### buyExclusiveTrait

```solidity
function buyExclusiveTrait(bytes32[] _proof, uint256 _smolId, uint256 _traitId) external
```

Unlock trait that is gated by a whitelist. Only unlockable with valid Merkle proof.

_Will revert if trait has no Merkle root set or if trait is marked special._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored Merkle root. |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### specialEventClaim

```solidity
function specialEventClaim(bytes32[] _proof, uint256 _smolId, uint256 _traitId) external
```

Unlock a limited offer trait for a specific limited offer group that is gated by a whitelist. Only unlockable with valid Merkle proof.

_Will revert if trait has no Merkle root set, if trait is not apart of a limited offer with valid subgroup, if user has claimed any other trait in the same tier._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored Merkle root. |
| _smolId | uint256 | Id number of selected Smol Brain token. |
| _traitId | uint256 | Id number of specifiic trait. |

### equipTraits

```solidity
function equipTraits(uint256[] _smolId, struct ISmolTraitShop.SmolBrain[] _traitsToEquip) external
```

Equip sets of unlocked traits for any number of Smol Brains in one tx.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _smolId | uint256[] | Array of id numbers for selected Smol Brain tokens. |
| _traitsToEquip | struct ISmolTraitShop.SmolBrain[] | Array of SmolBrain structs with trait ids to be equipped to each smol. |

### initialize

```solidity
function initialize() external
```

