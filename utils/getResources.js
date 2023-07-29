const getVehicles = async (setVehicles) => {
  try {
    const res = await fetch("/api/type-vehicle", { cache: "no-cache" });
    const data = await res.json();
    const vehicleList = [];
    data.forEach((vehicle) => {
      vehicleList.push(vehicle.vehicle);
    });
    setVehicles(vehicleList);
  } catch (error) {
    console.log(error);
  }
};

const getServices = async (setServices) => {
  try {
    const res = await fetch(`/api/services/`, { cache: "no-cache" });
    const data = await res.json();
    setServices(data);
  } catch (error) {
    console.log(error);
  }
};

const getServicesList = async (setServicesList) => {
  try {
    const res = await fetch("/api/service-list", { cache: "no-store" });
    const data = await res.json();
    const dataService = [];
    data.forEach((service) => {
      dataService.push(service.service);
    });
    setServicesList(dataService);
  } catch (error) {
    console.log(error);
  }
};

const getWashers = async (setWasher) => {
  try {
    const res = await fetch("/api/washers", { cache: "no-store" });
    const data = await res.json();
    const dataWashers = [];
    data.forEach((washer) => {
      dataWashers.push(washer.name);
    });
    setWasher(dataWashers);
  } catch (error) {
    console.log(error);
  }
};

const getServicesWasher = async (name, setWasherService) => {
  try {
    const res = await fetch(`/api/services-washer/${name}`, { cache: "no-store" });
    const data = await res.json();
    setWasherService(data);
  } catch (error) {
    console.log(error);
  }
};

const getParking = async (setParking) => {
  try {
    const res = await fetch("/api/parking", { cache: "no-store" });
    const data = await res.json();
    setParking(data);
  } catch (error) {
    console.log(error);
  }
};

const getCurrentDate = (formatDate) => {
  const date = new Date(formatDate);
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
