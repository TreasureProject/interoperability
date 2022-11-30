# Solidity API

## Legion

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external returns (uint256)
```

### setTokenURI

```solidity
function setTokenURI(uint256 _tokenId, string _tokenURI) external
```

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

### adminSafeTransferFrom

```solidity
function adminSafeTransferFrom(address _from, address _to, uint256 _tokenId) external
```

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal
```

### tokenURI

```solidity
function tokenURI(uint256 tokenId) public view virtual returns (string)
```

