# Solidity API

## SmolChopShopView

Public and internal view functions used by SmolChopShop.

### _checkBeforePurchase

```solidity
function _checkBeforePurchase(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view returns (uint256 price)
```

_Various checks that must be made before any upgrade purchase._

### _checkVehicleOwnership

```solidity
function _checkVehicleOwnership(address _vehicleAddress, uint256 _vehicleId) internal view
```

_Verify msg.sender is vehicle owner._

### _checkCompatibility

```solidity
function _checkCompatibility(address _vehicleAddress, uint256 _validVehicleType) internal view
```

_Verify upgrade is compatable with selected vehicle._

### _checkTrophyBalance

```solidity
function _checkTrophyBalance(uint256 _trophyId, uint256 _amount) internal view
```

_Check balance of trophyId for msg.sender._

### _checkWhitelistStatus

```solidity
function _checkWhitelistStatus(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bytes32[] _proof) internal view
```

_Verify merkle proof for user and check if allocation has been claimed._

### _checkBeforeEquip

```solidity
function _checkBeforeEquip(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view
```

_Check used for ownership and validity when equipping upgrades._

### getEquippedUpgrades

```solidity
function getEquippedUpgrades(address _vehicleAddress, uint256 _vehicleId) public view returns (struct SmolChopShopState.Vehicle)
```

Get currently equipped upgrades for a vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of vehicle token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.Vehicle | Vehicle struct containing ids of equipped Upgrades for a given vehicle. |

### getAllUnlockedUpgrades

```solidity
function getAllUnlockedUpgrades(address _vehicleAddress, uint256 _vehicleId) public view returns (struct SmolChopShopState.VehicleInventory)
```

Get all upgrades unlocked for a vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of vehicle token. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.VehicleInventory | VehicleInventory struct containing arrays of all upgrade ids for each type that have been unlocked for a vehicle. |

### getUpgradeInfo

```solidity
function getUpgradeInfo(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) public view returns (struct SmolChopShopState.Upgrade)
```

Get information about an upgrade by id and type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct SmolChopShopState.Upgrade | Upgrade struct containing all information about an upgrade. |

### getUpgradesForSale

```solidity
function getUpgradesForSale(enum SmolChopShopState.UpgradeType _upgradeType) public view returns (uint256[])
```

Check which id numbers of a specific upgrade type are currently for sale.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256[] | Array of upgrade id numbers that can be bought for a specific upgrade type. |

### __SmolChopShopView_init

```solidity
function __SmolChopShopView_init() internal
```

