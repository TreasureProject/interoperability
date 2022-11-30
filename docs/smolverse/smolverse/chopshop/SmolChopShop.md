# Solidity API

## SmolChopShop

Store front for users to purchase and equip vehicle upgrades.

### upgradeAndEquip

```solidity
function upgradeAndEquip(address[] _vehicleAddress, uint256[] _vehicleId, struct SmolChopShopState.Vehicle[] _upgradesToBuy, struct SmolChopShopState.Vehicle[] _upgradesToEquip) external
```

Buy set of upgrades for vehicle and apply upgrades in same tx. Does not have to equip same upgrades that were bought.

_Gas intensive. Almost always cheaper to call buyUpgradeBatch and equipUpgrades seperatly. Mostly for users who have multiiple vehicles and are willing to pay a premeium for convenience._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradesToBuy | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs containing upgrade ids to be bought for each upgrade type. Leave id as 0 to skip an upgrade type. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs containing upgrade ids to be equipped for each upgrade type. Leave id as 0 to skip an upgrade type. |

### buyUpgradeBatch

```solidity
function buyUpgradeBatch(address[] _vehicleAddress, uint256[] _vehicleId, enum SmolChopShopState.UpgradeType[] _upgradeType, uint256[] _upgradeId) external
```

Unlock individual upgrade for multiple vehicles or multiple upgrades for single vehicle. Can be any slot or even multiples of one slot type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradeType | enum SmolChopShopState.UpgradeType[] | Array of enums(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256[] | Array of id numbers for selected upgrades. |

### buySingleUpgrade

```solidity
function buySingleUpgrade(address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) external
```

Unlock individual upgrade for one vehicle.

_Used by all buy functions except for upgrades that require merkle proof verification._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

### buyExclusiveUpgrade

```solidity
function buyExclusiveUpgrade(bytes32[] _proof, address _vehicleAddress, uint256 _vehicleId, enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) external
```

Unlcok upgrade that is gated by a merkle tree whitelist. Only unlockable with valid proof.

_Will revert if token is not whitelist gated._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _proof | bytes32[] | Merkle proof to be checked against stored merkle root. |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |

### equipUpgradesBatch

```solidity
function equipUpgradesBatch(address[] _vehicleAddress, uint256[] _vehicleId, struct SmolChopShopState.Vehicle[] _upgradesToEquip) external
```

Equip sets of unlocked upgrades for multiple vehicles in one tx.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address[] | Array of addresses for collections that vehicle tokens are from. |
| _vehicleId | uint256[] | Array of id numbers for selected vehicle tokens. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle[] | Array of Vehicle structs with upgrade ids to be equipped to each vehicle. |

### equipUpgrades

```solidity
function equipUpgrades(address _vehicleAddress, uint256 _vehicleId, struct SmolChopShopState.Vehicle _upgradesToEquip) external
```

Equip a set of unlocked upgrades for single vehicle.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _vehicleAddress | address | Address of collection that vehicle token is from. |
| _vehicleId | uint256 | Id number of selected vehicle token. |
| _upgradesToEquip | struct SmolChopShopState.Vehicle | Vehicle struct with upgrade ids to be equipped to vehicle. |

### exchangeTrophies

```solidity
function exchangeTrophies(uint256 _trophyId, uint256 _amountToBurn) external
```

Burns amount of trophies in exchange for equal value in base units. Base units are used to buy vehicle upgrades.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256 | Token Id of trophy type to be burned. |
| _amountToBurn | uint256 | Amount of trophies to be exchanged. |

### initialize

```solidity
function initialize() external
```

