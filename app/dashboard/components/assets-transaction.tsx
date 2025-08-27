import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, CircleMinus, Clock } from "lucide-react";

const transactions = [
  {
    assetId: "ASD-10011",
    assetType: "Office Building",
    value: "$23,489",
    loanTaken: "$7,200",
    status: "Overdue",
    date: "Jun 3, 2025 - Due Jun 10, 2026",
  },
  {
    assetId: "ASD-10012",
    assetType: "Precious Stones",
    value: "$60,000",
    loanTaken: "$30,000",
    status: "Repaid",
    date: "Aug 13, 2025 - Due Mar 13, 2026",
  },
  {
    assetId: "ASD-10013",
    assetType: "Mining Equipment",
    value: "$98,000",
    loanTaken: "$30,000",
    status: "Cancelled",
    date: "Aug 21, 2025 - Due Aug 21, 2026",
  },
];

const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "overdue":
        return {
          bg: "#FFF7E7",
          text: "#F4B027",
          icon: Clock,
        };
      case "repaid":
        return {
          bg: "#ECFFF1",
          text: "#29B250",
          icon: CheckCircle,
        };
      case "cancelled":
        return {
          bg: "#FFF1F0",
          text: "#FB3931",
          icon: CircleMinus,
        };

      default:
        return {
          bg: "",
          text: "",
          border: "",
          icon: null,
        };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 ${styles.bg} ${styles.text}`}
    >
      {styles.icon && <styles.icon className="w-3.5 h-3.5" />}
      <span className="text-xs font-medium">{status}</span>
    </div>
  );
};

const AssetsTransaction = () => {
  return (
    <div>
      <Card className="border-none shadow-none rounded-none pt-2">
        <CardHeader className="text-[15.5px] px-0 text-black font-semibold">
          Asset Transactions
        </CardHeader>

        <CardContent className="text-[13.78px] flex flex-col font-medium w-full justify-center items-center text-[#8C94A6] px-0">
          <Table>
            <TableHeader className="bg-[#F8F8FB] text-[#49576D] border-b border-b-[#E5E5E5] font-medium text-[12.06px]">
              <TableRow className="justify-around items-center">
                <TableHead className="font-medium">Asset ID</TableHead>
                <TableHead className="font-medium">Asset Type</TableHead>
                <TableHead className="font-medium">Value</TableHead>
                <TableHead className="font-medium">Loan Taken</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.assetId}
                  className="justify-around items-center hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="font-medium text-[#49576D] text-[13.78px]">
                    {transaction.assetId}
                  </TableCell>
                  <TableCell className="text-[#1A1A21] text-[13.78px]">
                    {transaction.assetType}
                  </TableCell>
                  <TableCell className="text-[#1A1A21] text-[13.78px] font-semibold">
                    {transaction.value}
                  </TableCell>
                  <TableCell className="text-[#1A1A21] text-[13.78px]">
                    {transaction.loanTaken}
                  </TableCell>
                  <TableCell className="text-[#1A1A21] text-[13.78px]">
                    <StatusBadge status={transaction.status} />
                  </TableCell>
                  <TableCell className="text-[#1A1A21] text-[13.78px]">
                    {transaction.date}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssetsTransaction;
