# Solidity API

## IRecruitLevel

### increaseRecruitExp

```solidity
function increaseRecruitExp(uint256 _tokenId, uint32 _expIncrease) external
```

### recruitType

```solidity
function recruitType(uint256 _tokenId) external view returns (enum RecruitType)
```

### getRecruitLevel

```solidity
function getRecruitLevel(uint256 _tokenId) external view returns (uint16)
```

## RecruitType

```solidity
enum RecruitType {
  NONE,
  COGNITION,
  PARABOLICS,
  LETHALITY,
  SIEGE_APPRENTICE,
  FIGHTER_APPRENTICE,
  ASSASSIN_APPRENTICE,
  RANGED_APPRENTICE,
  SPELLCASTER_APPRENTICE
}
```

