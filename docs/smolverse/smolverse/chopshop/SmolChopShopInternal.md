# Solidity API

## SmolChopShopInternal

Internal functions used to purchase and equip vehicle upgrades.

### _buyUpgrades

```solidity
function _buyUpgrades(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToBuy) internal
```

_Buy set of upgrades for a vehicle. 0 means no upgrade for that upgrade slot. Other upgrades are handled by buySingleUpgrade_

### _buy

```solidity
function _buy(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Used by all buy functions except for upgrades that require merkle proof verification._

### _unlockUpgrade

```solidity
function _unlockUpgrade(uint256 _price, address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Internal helper function that unlocks an upgrade for specified vehicle and emits UpgradeUnlocked event._

### _equip

```solidity
function _equip(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToEquip) internal
```

_Equip a set of unlocked upgrades for single vehicle._

### __SmolChopShopInternal_init

```solidity
function __SmolChopShopInternal_init() internal
```

