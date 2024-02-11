let activePlayers = 0;

Citizen.CreateThread(async () => {
  while (true) {
    const players = GetActivePlayers();
    activePlayers = players.length;

    if (activePlayers < 15) {
      SetParkedVehicleDensityMultiplierThisFrame(1.0);
      SetRandomVehicleDensityMultiplierThisFrame(0.9);
      SetVehicleDensityMultiplierThisFrame(1.0);
      SetPedDensityMultiplierThisFrame(1.0);
      SetScenarioPedDensityMultiplierThisFrame(1.0, 1.0);
      await Citizen.Wait(60000);
    } else if (activePlayers >= 20 && activePlayers < 50) {
      SetParkedVehicleDensityMultiplierThisFrame(0.8);
      SetRandomVehicleDensityMultiplierThisFrame(0.7);
      SetVehicleDensityMultiplierThisFrame(0.8);
      SetPedDensityMultiplierThisFrame(0.8);
      SetScenarioPedDensityMultiplierThisFrame(1.0, 1.0);
      await Citizen.Wait(60000);
    } else if (activePlayers >= 50) {
      SetParkedVehicleDensityMultiplierThisFrame(0.6);
      SetRandomVehicleDensityMultiplierThisFrame(0.5);
      SetVehicleDensityMultiplierThisFrame(0.6);
      SetPedDensityMultiplierThisFrame(0.6);
      SetScenarioPedDensityMultiplierThisFrame(0.5, 0.5);
      await Citizen.Wait(60000);
    }

    await Citizen.Wait(5000);
  }
});
