# Solidity API

## SmolTraitShopInternal

Internal functions used to purchase and equip traits for Smol Brains.

### _buy

```solidity
function _buy(address _userAddress, uint256 _smolId, uint256 _traitId) internal
```

_Used by all buy functions except for traits that require merkle proof verification._

### _buyMerkle

```solidity
function _buyMerkle(address _userAddress, bytes32[] _proof, uint256 _smolId, uint256 _traitId, uint256 _limitedOfferId, uint256 _groupId) internal
```

_Used for buy/claim functions that require merkle proof verification._

### _unlockTrait

```solidity
function _unlockTrait(address _userAddress, uint256 _price, uint256 _smolId, uint256 _traitId) internal
```

_Internal helper function that unlocks an upgrade for specified vehicle and emits UpgradeUnlocked event._

### _equipSet

```solidity
function _equipSet(address _userAddress, uint256 _smolId, struct ISmolTraitShop.SmolBrain _traitsToEquip) internal
```

_Equip a set of unlocked traits for single Smol Brain._

### __SmolTraitShopInternal_init

```solidity
function __SmolTraitShopInternal_init() internal
```

