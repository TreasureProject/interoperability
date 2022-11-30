# Solidity API

## ITreasureTriad

### generateBoardAndPlayGame

```solidity
function generateBoardAndPlayGame(uint256 _randomNumber, enum LegionClass _legionClass, struct UserMove[] _userMoves) external view returns (struct GameOutcome)
```

## PlayerType

```solidity
enum PlayerType {
  NONE,
  NATURE,
  USER
}
```

## GridCell

```solidity
struct GridCell {
  uint256 treasureId;
  enum PlayerType playerType;
  bool isFlipped;
  bool isCorrupted;
  bool hasAffinity;
  enum TreasureCategory affinity;
}
```

## UserMove

```solidity
struct UserMove {
  uint8 x;
  uint8 y;
  uint256 treasureId;
}
```

## GameOutcome

```solidity
struct GameOutcome {
  uint8 numberOfFlippedCards;
  uint8 numberOfCorruptedCardsLeft;
  bool playerWon;
}
```

