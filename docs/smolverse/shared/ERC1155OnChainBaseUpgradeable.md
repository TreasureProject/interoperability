# Solidity API

## ERC1155OnChainBaseUpgradeable

### TokenTraitChanged

```solidity
event TokenTraitChanged(uint256 _tokenId, string _name, string _description, struct ERC1155OnChainBaseUpgradeable.Property[] _properties)
```

### PropertyType

```solidity
enum PropertyType {
  STRING,
  NUMBER
}
```

### Property

```solidity
struct Property {
  string name;
  string value;
  enum ERC1155OnChainBaseUpgradeable.PropertyType propertyType;
}
```

### TraitData

```solidity
struct TraitData {
  string name;
  string description;
  string png;
  struct ERC1155OnChainBaseUpgradeable.Property[] properties;
}
```

### tokenIdToTraitData

```solidity
mapping(uint256 => struct ERC1155OnChainBaseUpgradeable.TraitData) tokenIdToTraitData
```

### __ERC1155OnChainBase_init

```solidity
function __ERC1155OnChainBase_init() internal
```

### uploadTraitData

```solidity
function uploadTraitData(uint256 _tokenId, struct ERC1155OnChainBaseUpgradeable.TraitData _traitData) external
```

### exists

```solidity
function exists(uint256 _tokenId) public view returns (bool)
```

### uri

```solidity
function uri(uint256 _tokenId) public view returns (string)
```

### _generateAttributeString

```solidity
function _generateAttributeString(struct ERC1155OnChainBaseUpgradeable.TraitData _traitData) private view returns (string)
```

### _drawImage

```solidity
function _drawImage(struct ERC1155OnChainBaseUpgradeable.TraitData image) internal pure returns (string)
```

### _drawSVG

```solidity
function _drawSVG(uint256 _tokenId) internal view returns (string)
```

### tokenIdExists

```solidity
modifier tokenIdExists(uint256 _tokenId)
```

### __gap

```solidity
uint256[50] __gap
```

