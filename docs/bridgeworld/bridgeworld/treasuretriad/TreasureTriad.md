# Solidity API

## TreasureTriad

### initialize

```solidity
function initialize() external
```

### generateBoardAndPlayGame

```solidity
function generateBoardAndPlayGame(uint256 _randomNumber, enum LegionClass _legionClass, struct UserMove[] _userMoves) external view returns (struct GameOutcome)
```

### playGame

```solidity
function playGame(struct GridCell[3][3] _gameBoard, enum LegionClass _legionClass, struct UserMove[] _userMoves) public view returns (struct GameOutcome)
```

### _determineOutcome

```solidity
function _determineOutcome(struct GridCell[3][3] _gameBoard) private view returns (struct GameOutcome)
```

### _placeAndFlipCards

```solidity
function _placeAndFlipCards(struct GridCell[3][3] _gameBoard, enum LegionClass _legionClass, struct UserMove _userMove) private view
```

### _getCardBoost

```solidity
function _getCardBoost(struct GridCell _gridCell, enum LegionClass _legionClass) private view returns (uint8)
```

