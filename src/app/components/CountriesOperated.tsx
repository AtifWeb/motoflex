import React from "react";

export const CountriesOperated = () => {
  return (
    <div className="bg-[#fff] countries-operated p-7 pb-10 mt-10 rounded-[10px]">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[25px] text-center font-semibold">Countries</h1>
        <div className="grid grid-cols-5 mt-5 gap-5">
          <div>
            <a
              href="https://plc.auction/auction/from-us/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/US.svg"
                alt="United States"
                className="me-2"
              />
              United States
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-nl/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/NL.svg"
                alt="Netherlands"
                loading="lazy"
                className="me-2"
              />
              Netherlands
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-kr/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/KR.svg"
                alt="South Korea"
                loading="lazy"
                className="me-2"
              />
              South Korea
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-it/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/IT.svg"
                alt="Italy"
                loading="lazy"
                className="me-2"
              />
              Italy
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-fr/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/FR.svg"
                alt="France"
                loading="lazy"
                className="me-2"
              />
              France
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-es/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/ES.svg"
                alt="Spain"
                loading="lazy"
                className="me-2"
              />
              Spain
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-de/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/DE.svg"
                alt="Germany"
                loading="lazy"
                className="me-2"
              />
              Germany
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-ca/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/CA.svg"
                alt="Canada"
                loading="lazy"
                className="me-2"
              />
              Canada
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-be/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/BE.svg"
                alt="Belgium"
                loading="lazy"
                className="me-2"
              />
              Belgium
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-at/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/AT.svg"
                alt="Austria"
                loading="lazy"
                className="me-2"
              />
              Austria
            </a>
          </div>
          <div className="col">
            <a
              href="https://plc.auction/auction/from-ae/sale-type-auction"
              className="flex items-center text-[18px]"
            >
              <img
                src="https://plc.auction/img/flags/AE.svg"
                alt="United Arab Emirates"
                loading="lazy"
                className="me-2"
              />
              United Arab Emirates
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
