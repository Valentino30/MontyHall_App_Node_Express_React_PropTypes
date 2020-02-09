const getResult = (req, res, next) => {
  let cars = 0;
  const { simulations, switchDoor } = req.query;
  for (let i = 0; i < simulations; i++) {
    const doors = [1, 2, 3];
    const luckyDoor = doors[Math.floor(Math.random() * doors.length)];
    let playerDoor = doors[Math.floor(Math.random() * doors.length)];
    const montyHallDoor = doors.find(
      door => door !== luckyDoor && door !== playerDoor
    );
    if (JSON.parse(switchDoor)) {
      playerDoor = doors.find(
        door => door !== montyHallDoor && door !== playerDoor
      );
    }
    if (playerDoor === luckyDoor) {
      cars++;
    }
  }
  res.json({
    cars
  });
};

module.exports = {
  getResult
};
