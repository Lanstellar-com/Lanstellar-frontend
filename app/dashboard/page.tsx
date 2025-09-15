"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AssetsChart from "./components/assets-chart";
import AssetsTransaction from "./components/assets-transaction";
import { getCurrentUser, logout } from "@/lib/auth";

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((data) => setUser(data.user))
      .catch(() => logout()) 
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  return (
    <div className="font-inter space-y-[27px] p-6">
     
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Welcome, {user?.fullName || user?.name}
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      {/* Balance */}
      <div className="flex flex-row justify-between items-center mb-6">
        <span className="text-[15.5px] text-black gap-2 flex items-center font-medium">
          <Image
            src={"/icons/balance.svg"}
            alt="balance"
            width={20.67}
            height={20.67}
            className="text-[#8C94A6] w-[20.67px] h-[20.67px]"
          />
          Credit Balance
        </span>
        <span className="font-semibold text-[15.5px]">
          ${user?.balance ?? 0.0}
        </span>
      </div>

      {/* Chart */}
      <div>
        <AssetsChart />
      </div>

      {/* Transactions */}
      <div>
        <AssetsTransaction />
      </div>
    </div>
  );
};

export default DashboardPage;
