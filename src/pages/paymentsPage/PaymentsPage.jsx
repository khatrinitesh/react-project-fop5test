import { FaHandHoldingUsd } from "react-icons/fa";
import SectionTitleComponent from "./../../components/sectionTitleComponent/SectionTitleComponent";
import { paymentsData } from "./components/paymentsData";
import { useState } from "react";
import PaymentComponent from "./components/PaymentComponent";
import WageComponent from "./components/WageComponent";
import DbaComponent from "./components/DbaComponent";
import FeesComponent from "./components/FeesComponent";
import ImportPaymentsComponent from "./components/ImportPaymentsComponent";
import WaiverComponent from "./components/WaiverComponent";

const PaymentsPage = () => {
  const [activeTab, setActiveTab] = useState("payments"); // default active
  return (
    <div className="paymentsPage">
      <SectionTitleComponent>
        <FaHandHoldingUsd className={` text-[20px] text-[var(--color6)]`} />
        <h2
          className={`whitespace-nowrap text-[var(--color6)] md:text-smallSubTitle montserrat-regular`}
        >
          Financials: <span className="text-white">Payments</span>
        </h2>
      </SectionTitleComponent>
      <div className="innerContent grid gap-[10px] w-full  p-[20px]">
        <ul className="listTab flex flex-col md:flex-row border-b-[1px] border-b-[#697d98]">
          {paymentsData.map((tab, index) => (
            <li key={tab.id} className="w-full text-center">
              <a
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex-1 md:w-auto block cursor-pointer px-4 py-[7px] 
                        border-b-0 border border-[#010d4a] text-[14px] 
                        text-extraSmallDescription montserrat-medium transition-colors
                        ${
                          activeTab === tab.id
                            ? "bg-[#1b7398] text-white"
                            : "bg-[#f2f5ff] text-[#010d4a]"
                        }
                        ${index < paymentsData.length - 1 ? "border-r-0" : ""} 
                      `}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="tab-content mt-4">
          {activeTab === "payments" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Add Payments
              </h3> */}
              <PaymentComponent />
            </div>
          )}
          {activeTab === "wage" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Add Wage
              </h3> */}
              <WageComponent />
            </div>
          )}
          {activeTab === "dba" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Add DBA
              </h3> */}
              <DbaComponent />
            </div>
          )}
          {activeTab === "fees" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Add Fees
              </h3> */}
              <FeesComponent />
            </div>
          )}
          {activeTab === "waiver" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Add Waiver
              </h3> */}
              <WaiverComponent />
            </div>
          )}
          {activeTab === "importPayments" && (
            <div className="grid gap-[10px]">
              {/* <h3 className="montserrat-semibold text-smallSubTitle">
                Import Payments
              </h3> */}
              <ImportPaymentsComponent />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentsPage;
