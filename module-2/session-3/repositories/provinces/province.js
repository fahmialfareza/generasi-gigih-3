import provinces from "./json/province.json" assert { type: "json" };

export const getProvinceByIDRepo = (id) => {
  const provinceArray = provinces.filter(
    (province) => province.id === Number(id)
  );

  if (provinceArray.length === 0) {
    return null;
  }

  return provinceArray[0];
};
