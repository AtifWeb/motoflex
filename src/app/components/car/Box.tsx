import React from "react";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
export const Box = ({ img, heading }: any) => {
  return (
    <div className="grid grid-cols-[300px_1fr] mt-4 boxshadow rounded-[10px] bg-[#fff] p-2">
      <img src={img} alt="" className="w-full" />
      <div className="p-3 flex flex-col">
        <h1 className="font-black text-[20px]">{heading}</h1>
        <p className="font-black text-[20px] flex-1">1998</p>

        <p className="text-[16px] font-semibold">Side Front damage</p>

        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="flex items-center gap-1">
            <LocalGasStationIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">Gasolin</h1>
          </div>
          <div className="flex items-center gap-1">
            <TimeToLeaveIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">Front Wheel Drive</h1>
          </div>
          <div className="flex items-center gap-1">
            <SettingsSuggestIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">Manual</h1>
          </div>
          <div className="flex items-center gap-1">
            <NetworkCheckIcon fontSize="small" className="text-[#FF4E20]" />
            <h1 className="text-[14px]">467 417 km</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
