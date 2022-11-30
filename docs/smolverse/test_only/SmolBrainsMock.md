# Solidity API

## SmolBrainsMock

### tokenIdCur

```solidity
uint256 tokenIdCur
```

### baseURI

```solidity
string baseURI
```

### initialize

```solidity
function initialize() external
```

### safeMint

```solidity
function safeMint(address _to) external
```

### getGender

```solidity
function getGender(uint256 _tokenId) public pure returns (uint256)
```

### tokenURI

```solidity
function tokenURI(uint256 _tokenId) public view returns (string)
```

### setURI

```solidity
function setURI() external
```

### scanBrain

```solidity
function scanBrain(uint256 _tokenId) public pure returns (uint256 IQ)
```

### brainz

```solidity
function brainz(uint256 _tokenId) public pure returns (uint256 IQ)
```

### averageIQ

```solidity
function averageIQ() public pure returns (uint256)
```

