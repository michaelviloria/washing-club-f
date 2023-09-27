import { OtherCashModel } from "@/models/otherCash";
import { ParkingModel } from "@/models/parking";
import { ServiceModel } from "@/models/service";
import dbConnection from "@/utils/db_connection";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConnection();
    const dataParking = await ParkingModel.find({})
      .limit(10)
      .sort({ dateUtc: -1 });
    const dataService = await ServiceModel.find({})
      .limit(10)
      .sort({ dateUtc: -1 });
    const dataOtherCash = await OtherCashModel.find({})
      .limit(10)
      .sort({ dateUtc: -1 });
    const allData = [...dataParking, ...dataService, ...dataOtherCash];
    allData.sort((a, b) => b.dateUtc - a.dateUtc);
    return NextResponse.json(allData);
  } catch (error) {
    console.log(error);
  }
};
