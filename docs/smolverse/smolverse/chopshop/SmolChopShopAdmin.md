# Solidity API

## SmolChopShopAdmin

Admin control functions for SmolChopShop.

### setUpgradeInfo

```solidity
function setUpgradeInfo(enum SmolChopShopState.UpgradeType[] _upgradeType, struct SmolChopShopState.Upgrade[] _upgradeInfo) external
```

Set new Upgrade struct info and save it to upgradeToInfo mapping.

_Upgrade ids are auto incremented and assigned. Ids are unique to each upgrade type._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType[] | Array of enums(0-6) representing which type of upgrade is being referenced. |
| _upgradeInfo | struct SmolChopShopState.Upgrade[] | Array of upgrade structs containing all information needed to add upgrade to contract. |

### changeUpgradeSaleStatus

```solidity
function changeUpgradeSaleStatus(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bool _forSale) external
```

Change existing upgrade sale status.

_Also adds and removes upgrade from for sale array._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _forSale | bool | New bool value to add(true)/remove(false) upgrades from sale. |

### changeUpgradeMerkleRoot

```solidity
function changeUpgradeMerkleRoot(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, bytes32 _merkleRoot) external
```

Change stored merkle root attached to existing upgrade for whitelist.

_Change to 0x0000000000000000000000000000000000000000000000000000000000000000 to remove whitelist._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _merkleRoot | bytes32 | New merkle root for whitelist verification or empty root for normal sale. |

### changeUpgradeName

```solidity
function changeUpgradeName(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, string _name) external
```

Change existing upgrade name.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _name | string | New string to be set as upgrade name. |

### changeUpgradePrice

```solidity
function changeUpgradePrice(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, uint256 _price) external
```

Change existing upgrade price.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _price | uint256 | New price for upgrade in base units. |

### changeUpgradeSupply

```solidity
function changeUpgradeSupply(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, uint256 _maxSupply) external
```

Change max supply or remove supply cap for an existing upgrade.

__maxSupply=0 : No supply cap | _maxSupply>0 : Supply cap is set to _maxSupply._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _maxSupply | uint256 | New max supply value for selected upgrade. Enter 0 to remove supply cap. |

### changeUpgradeValidVehicleType

```solidity
function changeUpgradeValidVehicleType(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId, enum SmolChopShopState.ValidVehicleType _validVehicleType) external
```

Change compatable vehicle type for an existing upgrade.

_Must be carful not to change car skin to cycle skin (or vice-versa) if some have already been purchased because once bought, upgrades cannot be removed from vehicles invintory and invalid upgrades cannot be equiped._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _upgradeType | enum SmolChopShopState.UpgradeType | Enum(0-6) representing which type of upgrade is being referenced. |
| _upgradeId | uint256 | Id number of specifiic upgrade. |
| _validVehicleType | enum SmolChopShopState.ValidVehicleType | Enum(0-2) representing which type of vehicle this upgrade can be applied to. |

### _addUpgradeToSale

```solidity
function _addUpgradeToSale(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Adds upgrade id to sale array for that upgrade type._

### _removeUpgradeFromSale

```solidity
function _removeUpgradeFromSale(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal
```

_Removes upgrade id from sale array for that upgrade type._

### _checkUpgradeId

```solidity
function _checkUpgradeId(enum SmolChopShopState.UpgradeType _upgradeType, uint256 _upgradeId) internal view
```

_Check to verify _upgradeId is within range of valid upgrade ids._

### setExchangeRates

```solidity
function setExchangeRates(uint256[] _trophyId, uint256[] _trophyValue) external
```

Set trophy value in base units.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256[] | Array of trophy id numbers from the RacingTrophies contract. |
| _trophyValue | uint256[] | Array of values in base units to be assigned to _trophyId. |

### setLowestValueTrophyId

```solidity
function setLowestValueTrophyId(uint256 _trophyId) external
```

Set Id for token from trophy contract that has the lowest value in base units.

_Must be set to buy upgrades or exchange trophies._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _trophyId | uint256 | Id number of lowest value trophy from the RacingTrophies contract. |

### setContracts

```solidity
function setContracts(address _smolCars, address _swolercycles, address _racingTrophies) external
```

Set other contract addresses.

### contractsAreSet

```solidity
modifier contractsAreSet()
```

### areContractsSet

```solidity
function areContractsSet() public view returns (bool)
```

Verify necessary contract addresses have been set.

### __SmolChopShopAdmin_init

```solidity
function __SmolChopShopAdmin_init() internal
```

