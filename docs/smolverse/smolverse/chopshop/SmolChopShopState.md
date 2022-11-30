# Solidity API

## SmolChopShopState

Shared storage layout for SmolChopShop.

### UpgradeUnlocked

```solidity
event UpgradeUnlocked(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradesEquipped

```solidity
event UpgradesEquipped(address _vehicleAddress, uint256 _vehicleId)
```

### UpgradeSaleStateChanged

```solidity
event UpgradeSaleStateChanged(uint256 _upgradeType, uint256 _upgradeId, bool _added)
```

### racingTrophies

```solidity
contract ISmolRacingTrophies racingTrophies
```

### smolCars

```solidity
contract IERC721 smolCars
```

### swolercycles

```solidity
contract IERC721 swolercycles
```

### lowestValueTrophyId

```solidity
uint256 lowestValueTrophyId
```

### trophyValue

```solidity
mapping(uint256 => uint256) trophyValue
```

### userAllocationClaimed

```solidity
mapping(address => mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => bool))) userAllocationClaimed
```

### userToTotalAmountSpent

```solidity
mapping(address => uint256) userToTotalAmountSpent
```

### upgradeToInfo

```solidity
mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => struct SmolChopShopState.Upgrade)) upgradeToInfo
```

### upgradeTypeToIdsForSale

```solidity
mapping(enum SmolChopShopState.UpgradeType => uint256[]) upgradeTypeToIdsForSale
```

### upgradeTypeToLastId

```solidity
mapping(enum SmolChopShopState.UpgradeType => uint256) upgradeTypeToLastId
```

### vehicleToUpgradeInventory

```solidity
mapping(address => mapping(uint256 => mapping(enum SmolChopShopState.UpgradeType => uint256[]))) vehicleToUpgradeInventory
```

### vehicleToEquippedUpgrades

```solidity
mapping(address => mapping(uint256 => struct SmolChopShopState.Vehicle)) vehicleToEquippedUpgrades
```

### vehicleToUnlockedUpgrades

```solidity
mapping(address => mapping(uint256 => mapping(enum SmolChopShopState.UpgradeType => mapping(uint256 => bool)))) vehicleToUnlockedUpgrades
```

### UpgradeType

```solidity
enum UpgradeType {
  Skin,
  Color,
  Background,
  TopMod,
  FrontMod,
  SideMod,
  BackMod
}
```

### ValidVehicleType

```solidity
enum ValidVehicleType {
  Car,
  Cycle,
  Either
}
```

### Vehicle

```solidity
struct Vehicle {
  uint256 skin;
  uint256 color;
  uint256 background;
  uint256 topMod;
  uint256 frontMod;
  uint256 backMod;
  uint256 sideMod;
}
```

### VehicleInventory

```solidity
struct VehicleInventory {
  uint256[] skin;
  uint256[] color;
  uint256[] background;
  uint256[] topMod;
  uint256[] frontMod;
  uint256[] backMod;
  uint256[] sideMod;
}
```

### Upgrade

```solidity
struct Upgrade {
  string name;
  uint256 price;
  uint256 validVehicleType;
  uint256 amountClaimed;
  uint256 maxSupply;
  bool uncappedSupply;
  bool forSale;
  bytes32 merkleRoot;
}
```

### __SmolChopShopState_init

```solidity
function __SmolChopShopState_init() internal
```

