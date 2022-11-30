# Solidity API

## ISmolChopShop

Custom errors used by SmolChopShop.

### ContractsAreNotSet

```solidity
error ContractsAreNotSet()
```

### ArrayLengthMismatch

```solidity
error ArrayLengthMismatch()
```

### TrophyValueNotSet

```solidity
error TrophyValueNotSet()
```

### LowestValueTrophyIdNotSet

```solidity
error LowestValueTrophyIdNotSet()
```

### InsufficientTrophies

```solidity
error InsufficientTrophies(uint256 _balance, uint256 _price)
```

### InvalidTrophyValue

```solidity
error InvalidTrophyValue(uint256 _value)
```

### InvalidUpgradeSupply

```solidity
error InvalidUpgradeSupply()
```

### UpgradeIdDoesNotExist

```solidity
error UpgradeIdDoesNotExist(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeIdSoldOut

```solidity
error UpgradeIdSoldOut(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotCurrentlyForSale

```solidity
error UpgradeNotCurrentlyForSale(uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotAvailableForSelectedVehicle

```solidity
error UpgradeNotAvailableForSelectedVehicle(address _vehicleAddress, uint256 _validVehicleType)
```

### MustBeVehicleOwnerToUpgrade

```solidity
error MustBeVehicleOwnerToUpgrade()
```

### UpgradeAlreadyUnlockedForVehicle

```solidity
error UpgradeAlreadyUnlockedForVehicle(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### UpgradeNotUnlockedForVehicle

```solidity
error UpgradeNotUnlockedForVehicle(address _vehicleAddress, uint256 _vehicleId, uint256 _upgradeType, uint256 _upgradeId)
```

### MustCallBuyExclusiveUpgrade

```solidity
error MustCallBuyExclusiveUpgrade(uint256 _upgradeType, uint256 _upgradeId)
```

### MustCallBuySingleUpgrade

```solidity
error MustCallBuySingleUpgrade(uint256 _upgradeType, uint256 _upgradeId)
```

### InvalidMerkleProof

```solidity
error InvalidMerkleProof()
```

### WhitelistAllocationExceeded

```solidity
error WhitelistAllocationExceeded()
```

