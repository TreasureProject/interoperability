# Solidity API

## Pilgrimage1155Mapping

### __Pilgrimage1155Mapping_init

```solidity
function __Pilgrimage1155Mapping_init() internal
```

### setPilgrimageLength

```solidity
function setPilgrimageLength(uint256 _pilgrimageLength) external
```

### setMetadataForIds

```solidity
function setMetadataForIds(uint256[] _ids, enum LegionRarity[] _rarities, enum LegionClass[] _classes, uint256[] _constellationOdds, uint8[] _constellationNumber) external
```

### removeMetadataForIds

```solidity
function removeMetadataForIds(uint256[] _ids) external
```

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) public pure returns (bytes4)
```

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) public pure returns (bytes4)
```

