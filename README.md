# Vehicle Density Script

This script dynamically adjusts vehicle and ped spawn densities based on the number of active players on the server.

## Usage

1. Download the latest release from the releases page
2. Extract the folder into your resource directory
3. Add `start VehicleDensity` to your server.cfg

## Features

- Checks active player count every 5 seconds
- Sets density multipliers based on three thresholds:
  - Below 15 players: Normal density of 1.0
  - 15-20 players: Slightly reduced density of 0.8
  - Above 50 players: Further reduced density of 0.6
- Adjusts parked vehicles, random vehicles, all vehicles, peds, and scenario peds
- Runs continuously to respond to changes in player count

## Benefits

This script helps servers maintain consistent performance by reducing entity densities as more players join. This prevents issues like excessive lag or resource usage at higher populations.

## Future Improvements

- Add configuration for threshold values and multipliers
- Integrate with a player manager for more accurate counts
- Option to toggle script on/off
