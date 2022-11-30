# Solidity API

## ITreasureNFTPriceTracker

### AveragePriceUpdated

```solidity
event AveragePriceUpdated(address _collection, enum FloorType _floorType, uint256 _oldAverage, uint256 _salePrice, uint256 _newAverage)
```

### recordSale

```solidity
function recordSale(address _collection, uint256 _tokenId, uint256 _salePrice) external
```

### getAveragePriceForCollection

```solidity
function getAveragePriceForCollection(address _collection, enum FloorType _floorType) external view returns (uint256)
```

## FloorType

```solidity
enum FloorType {
  FLOOR,
  SUBFLOOR1,
  SUBFLOOR2,
  SUBFLOOR3
}
```

