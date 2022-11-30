# Solidity API

## SmolBrainsPets

### _tokenIdTracker

```solidity
struct Counters.Counter _tokenIdTracker
```

### baseURI

```solidity
string baseURI
```

### BaseURIChanged

```solidity
event BaseURIChanged(string from, string to)
```

### SmolPetMint

```solidity
event SmolPetMint(address to, uint256 tokenId, string tokenURI)
```

### constructor

```solidity
constructor() public
```

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) public view returns (bool)
```

### mint

```solidity
function mint(address _to) external
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### _baseURI

```solidity
function _baseURI() internal view returns (string)
```

_Base URI for computing {tokenURI}. If set, the resulting URI for each
token will be the concatenation of the `baseURI` and the `tokenId`. Empty
by default, can be overridden in child contracts._

### setBaseURI

```solidity
function setBaseURI(string _baseURItoSet) external
```

