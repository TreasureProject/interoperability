# Solidity API

## TreasureNFTPriceTracker

### treasureMarketplaceContract

```solidity
address treasureMarketplaceContract
```

### legionContract

```solidity
address legionContract
```

### legionMetadata

```solidity
address legionMetadata
```

### collectionToFloorTypeToPriceAvg

```solidity
mapping(address => mapping(enum FloorType => uint256)) collectionToFloorTypeToPriceAvg
```

### initialize

```solidity
function initialize(address _treasureMarketplaceContract, address _legionContract, address _legionMetadata) external
```

Perform initial contract setup

_The initializer modifier ensures this is only called once, the owner should confirm this was properly
        performed before publishing this contract address._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _treasureMarketplaceContract | address | address of treasure marketplace |
| _legionContract | address | address of the legion collection |
| _legionMetadata | address |  |

### recordSale

```solidity
function recordSale(address _collection, uint256 _tokenId, uint256 _salePrice) external
```

Record sale price and update floor pricing averages

_If an average does not yet exist, the new average will be _salePrice
        avg will be stored as FloorType.FLOOR unless special sub-floor criteria is met_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collection | address | Address of the collection that had a token sale |
| _tokenId | uint256 | The token sold |
| _salePrice | uint256 | The amount the sale was for |

### getAveragePriceForCollection

```solidity
function getAveragePriceForCollection(address _collection, enum FloorType _floorType) external view returns (uint256)
```

Return the current floor average for a given collection

_Provide a floor type to receive a recorded sub-floor average
        Collections not containing subfloor records should be queried with FloorType.FLOOR_

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _collection | address | address of collection to get floor price average of |
| _floorType | enum FloorType | the sub-floor average of the given collection |

