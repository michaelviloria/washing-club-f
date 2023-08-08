const getVehicles = async (setValue) => {
  try {
    const res = await fetch("/api/type-vehicle", { cache: "no-cache" });
    const { data } = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e.vehicle);
    });
    return setValue(values);
  } catch (error) {
    console.log(error);
  }
};

const getServices = async (setValue) => {
  try {
    const res = await fetch(`/api/services/`, { cache: "no-cache" });
    const { data } = await res.json();
    return setValue(data);
  } catch (error) {
    console.log(error);
  }
};

const getServicesList = async (setValue) => {
  try {
    const res = await fetch("/api/service-list", { cache: "no-store" });
    const { data } = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e.service);
    });
    return setValue(values);
  } catch (error) {
    console.log(error);
  }
};

const getWashers = async (setValue) => {
  try {
    const res = await fetch("/api/washers", { cache: "no-store" });
    const { data } = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e.name);
    });
    return setValue(values);
  } catch (error) {
    console.log(error);
  }
};

const getServicesWasher = async (name, setValue) => {
  try {
    const res = await fetch(`/api/services/${name}`, { cache: "no-store" });
    const { data } = await res.json();
    return setValue(data);
  } catch (error) {
    console.log(error);
  }
};

const getParking = async (setValue) => {
  try {
    const res = await fetch("/api/parking", { cache: "no-store" });
    const { data } = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e);
    });
    return setValue(values);
  } catch (error) {
    console.log(error);
  }
};

const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month.toString().padStart(2, "0")}/${year}`;
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amOpm = hours >= 12 ? "pm" : "am";
  return `${hours}:${minutes} ${amOpm}`;
};

export {
  getVehicles,
  getServicesList,
  getWashers,
  getCurrentDate,
  getServicesWasher,
  getCurrentTime,
  getParking,
  getServices,
};
