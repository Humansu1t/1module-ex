function checkVehicle(wheelsCount, weight) {
    if (wheelsCount === 2 && weight < 100) {
      return 'Парковка разрешена';
    } else {
      return 'Вам здесь не место! Мяу!';
    }
  }
  
  console.log(checkVehicle(2, 75)); // Парковка разрешена
  console.log(checkVehicle(4, 120)); // Вам здесь не место! Мяу!
  