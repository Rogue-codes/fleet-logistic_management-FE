/* eslint-disable @typescript-eslint/no-explicit-any */
import { Airplane, GasStation, Messenger, ShieldSecurity } from "iconsax-react";
import FlexCard from "../../widgets/FlexCard";
import BarChartBox from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const admin = useSelector((state: any) => state.auth.isLoggedIn);


  return (
    <div className="w-[85%] min-h-screen pt-28 px-6 ml-[15%]">
      <FlexCard>
        <h2 className="text-3xl text-purple-1 font-bold leading-6">
          Hi, {admin.lastName}
        </h2>

        <button className="p-3 px-4 rounded-lg bg-purple-1 text-md text-white font-medium hover:scale-105 transition-all">
          Send Request
        </button>
      </FlexCard>

      <div className="w-full h-full my-12 flex justify-start gap-3 items-start">
        <div className="w-[90%]">
          <div className="flex justify-between items-center">
            <div className="w-[33%] p-6 rounded-lg bg-white shadow-[8px_8px_40px_0px_rgba(123,97,255,0.14)]">
              <div className="flex justify-start items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#DA4640] flex justify-center items-center">
                  <GasStation size={20} color="white" variant="Bold" />
                </div>

                <p className="text-black-1 text-md font-medium">
                  Monthly fuel budget
                </p>
              </div>

              <div className="flex mt-[1.6rem] justify-between items-center">
                <p className="text-black-1 text-sm">This month</p>
                <p className="text-black-1 text-md font-semibold underline">
                  N1,000,000
                </p>
              </div>

              <div className="flex justify-between mt-4 items-center">
                <p className="text-black-1 text-sm">Last month</p>
                <p className="text-black-1 text-md font-semibold underline">
                  N500,000
                </p>
              </div>

              <div className="flex mt-10 justify-between items-center">
                <div className="w-16 h-2 rounded-xl bg-[rgba(75,75,77,0.15)]">
                  <div className="w-[40%] h-full bg-purple-1 rounded-xl"></div>
                </div>

                <p className="text-sm text-purple-1">View full report</p>
              </div>
            </div>

            <div className="w-[30%] rounded-lg bg-white shadow-[8px_8px_40px_0px_rgba(123,97,255,0.14)] p-6">
              <div className="flex justify-start items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-purple-1 flex justify-center items-center">
                  <Messenger size={20} color="white" variant="Bold" />
                </div>

                <p className="text-black-1 text-md font-medium">Requests</p>
              </div>

              <div className="w-full flex justify-between items-center mt-12">
                <div>
                  <p>Total</p>
                  <div className="w-12 h-12 text-lg text-black-1 flex justify-center items-center mt-6 font-semibold rounded-full bg-[rgba(231,226,251,0.24)]">
                    150
                  </div>
                </div>

                <div>
                  <p>Approved</p>
                  <div className="w-12 mx-auto h-12 text-lg text-black-1 flex justify-center items-center mt-6 font-semibold rounded-full bg-[rgba(231,226,251,0.24)]">
                    100
                  </div>
                </div>

                <div>
                  <p className="text-center ml-3">Pending</p>
                  <div className="w-12 mx-auto h-12 text-lg text-black-1 flex justify-center items-center mt-6 font-semibold rounded-full bg-[rgba(231,226,251,0.24)]">
                    50
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[35%] p-6 rounded-lg bg-white shadow-[8px_8px_40px_0px_rgba(123,97,255,0.14)]">
              <div className="flex justify-start items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#A7C908] flex justify-center items-center">
                  <ShieldSecurity size={20} color="white" variant="Bold" />
                </div>

                <p className="text-black-1 text-md font-medium">
                  Compliance Reminder
                </p>
              </div>

              <div className="w-full flex justify-between items-center mt-12">
                <div>
                  <p>Due soon</p>
                  <div className="w-12 h-12 text-lg text-black-1 flex justify-center items-center mt-6 font-semibold rounded-full bg-[rgba(231,226,251,0.24)]">
                    5
                  </div>
                </div>

                <div>
                  <p>Overdue</p>
                  <div className="w-12 mx-auto h-12 text-lg text-red-500 flex justify-center items-center mt-6 font-semibold rounded-full bg-[rgba(231,226,251,0.24)]">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between my-8 items-center ">
            <div className="w-[48%] rounded-lg bg-[rgba(123,97,255,0.04)]">
              <BarChartBox/>
            </div>
            <div
              className="w-[48%] p-6 rounded-lg"
              style={{
                background:
                  "linear-gradient(180deg, rgba(123, 97, 255, 0.21) 0%, rgba(209, 209, 209, 0.12) 100%)",
              }}
            >
              <h1>Vehicle Statistics</h1>
              <div className="flex mt-8 justify-between items-center">
                <div>
                  <p className="text-sm ">Total</p>
                  <h2 className="text-center text-[#000] text-2xl font-semibold mt-4">25</h2>
                </div>

                <div>
                  <p className="text-sm ">Total</p>
                  <h2 className="text-center text-purple-1 text-2xl font-semibold mt-4">25</h2>
                </div>

                <div>
                  <p className="text-sm ">Total</p>
                  <h2 className="text-center text-lemon-1 text-2xl font-semibold mt-4">25</h2>
                </div>
              </div>
              <p className="text-sm flex justify-start items-center gap-3 mt-8">under repair: <span className="text-xl text-[#DA4640] font-medium">3</span></p>
            </div>
          </div>

          <div className="w-full min-h-[80vh] rounded-lg shadow-[8px_8px_40px_0px_rgba(123,97,255,0.14)]">
            <Table/>
          </div>
        </div>

        <div className="w-[25%] p-6 rounded-lg !min-h-screen bg-[rgba(106,85,155,0.04);] py-12">
          <div className="p-4 flex bg-white justify-center items-center rounded-lg shadow-[4px_4px_4px_0px_rgba(0,0,0,0.10)]">
            Upcoming Travels
          </div>

          <p className="text-center text-md mb-5 text-[#000] mt-16 font-medium">
            Today
          </p>

          <div className="w-full">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <p className="text-center text-md mb-5 text-[#000] mt-16 font-medium">
            Today
          </p>

          <div className="w-full">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="flex justify-between items-center rounded-xl bg-white p-2">
              <Airplane size="25" color="#000" />
              <p>Yusuf Jide</p>
              <p>2 pm</p>
            </div>
          </div>

          <p className="text-center text-red-500 underline my-9">
            View Travel Manifest
          </p>

          <div
            className="p-6 rounded-lg"
            style={{
              background:
                "linear-gradient(180deg, rgba(123, 97, 255, 0.21) 0%, rgba(209, 209, 209, 0.12) 100%)",
            }}
          >
            <h1 className="text-md text-[#000] font-semibold">Fleet summary</h1>

            <div className="flex justify-between items-center mt-6">
              <p>Vechicles</p>
              <h1 className="text-[#000] text-lg font-semibold">25</h1>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p>Drivers</p>
              <h1 className="text-[#000] text-lg font-semibold">28</h1>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p>mechanics</p>
              <h1 className="text-[#000] text-lg font-semibold">8</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
