# Nuzlocke Ideation


## Nuzlocke API

```
Query: {
    game() {},
    region() {},
    location() {}, // routes
}
```
---

## Outline

### Splash Page:
- Login
- Signup


### Adventures:
- List Current Adventures (progress indicatior - effect for finished/completed)
- Delete Adventure
- Start New Adventure:
    - Select game, // Red, Blue, etc...
    - "Are you a boy or girl?"
    - Save name
    - Load locations related to game// List in order of play/branching
    - Load Pokemon located in game (filter by routes/locations?) - allow all (for randomised game)

### Adverture Ledger:
- Select Pokemon
    - From List
- Nickname
    - Set Name
- Captured Level
    - Set Level
- Captured Status
    - Captured
    - Received
    - Traded
    - Missed
    - Killed
- Notes
    - Anything of note

### Pokemon Management (Move pokemon between all 3 areas | Event Tree):
- Current Party (Max 6)
- Boxed Pokemon
- Graveyard

### Pokemon Detail:
- Pokedex Info
- Current Level
- Current Item
- Send To Graveyard

---

*Adventure is SRC of truth for Collection*

If change in A-Log occurs for an already saved capature offer two options:
- Overwrite collection entry
- Create new collection entry - mark previous entry from same route
