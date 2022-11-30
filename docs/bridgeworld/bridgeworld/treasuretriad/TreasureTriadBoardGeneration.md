# Solidity API

## TreasureTriadBoardGeneration

### __TreasureTriadBoardGeneration_init

```solidity
function __TreasureTriadBoardGeneration_init() internal
```

### generateGameBoardForRequest

```solidity
function generateGameBoardForRequest(uint256 _requestId) external view returns (struct GridCell[3][3])
```

### generateBoard

```solidity
function generateBoard(uint256 _randomNumber) public view returns (struct GridCell[3][3])
```

### _placeCorruptCells

```solidity
function _placeCorruptCells(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private pure
```

### _placeAffinities

```solidity
function _placeAffinities(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private pure returns (uint256)
```

### _placeNatureCards

```solidity
function _placeNatureCards(struct GridCell[3][3] _gameBoard, uint256 _randomNumber) private view returns (uint256)
```

### _pickRandomUniqueCoordinates

```solidity
function _pickRandomUniqueCoordinates(uint8 _amount, uint256 _randomNumber) private pure returns (uint8[2][])
```

