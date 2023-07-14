import provinces from "./json/province.json" assert { type: "json" };

export const getProvinceByIDRepo = (id) => {
  const province = provinces.find((province) => province.id === Number(id));

  return province;
};
