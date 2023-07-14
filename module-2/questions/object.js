const user = {
  id: 1,
  name: "Febry",
};

const province = {
  id: 1,
  province: "East Java",
};

const combineData = { ...user, province: province };
console.log(combineData);
