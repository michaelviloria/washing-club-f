const getVehicles = async (setValue) => {
  try {
    const res = await fetch("/api/type-vehicle", { cache: "no-store" });
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
    const res = await fetch(`/api/services/`, { cache: "no-store" });
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

const getStates = async (setValue) => {
  try {
    const res = await fetch("/api/states", { cache: "no-store" });
    const data = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e.state);
    });
    return setValue(values);
  } catch (error) {
    return console.log(error);
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

const getOtherCash = async (setValue) => {
  try {
    const res = await fetch("/api/other-cash", { cache: "no-store" });
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

const getCashFlow = async (setValue) => {
  try {
    const res = await fetch("/api/cash-flow", { cache: "no-store" });
    const data = await res.json();
    const values = [];
    data.forEach((e) => {
      values.push(e);
    });
    return setValue(values);
  } catch (error) {
    console.log(error);
  }
};

const getCurrentDate = async (setValue) => {
  const date = new Date(await getFormattedDate());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear().toString().slice(-2);
  return setValue(`${day}/${month.toString().padStart(2, "0")}/${year}`);
};

const getCurrentTime = async (setValue) => {
  const date = new Date(await getFormattedDate());
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amOpm = hours >= 12 ? "pm" : "am";
  return setValue(`${hours}:${minutes} ${amOpm}`);
};

const getFormattedDate = async (setValue = false) => {
  const result = await fetch(
    "https://worldtimeapi.org/api/timezone/America/Bogota",
    {
      cache: "no-store",
    }
  );

  const data = await result.json();

  if (setValue) {
    return setValue(data.datetime);
  } else {
    return data.datetime;
  }
};

export {
  getVehicles,
  getServicesList,
  getWashers,
  getStates,
  getCurrentDate,
  getServicesWasher,
  getCurrentTime,
  getParking,
  getServices,
  getFormattedDate,
  getOtherCash,
  getCashFlow,
};
