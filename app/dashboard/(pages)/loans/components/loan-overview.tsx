"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CircleMinus,
  Clock,
} from "lucide-react";
import Image from "next/image";
import api from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const StatusBadge = ({ status }: { status: string }) => {
  interface StatusStyles {
    bg: string;
    text: string;
    icon: React.ComponentType<{ className?: string }> | null;
  }

  const getStatusStyles = (status: string): StatusStyles => {
    switch (status.toLowerCase()) {
      case "requested":
        return { bg: "#FFF7E7", text: "#F4B027", icon: Clock };
      case "repaid":
        return { bg: "#ECFFF1", text: "#29B250", icon: CheckCircle };
      case "cancelled":
        return { bg: "#FFF1F0", text: "#FB3931", icon: CircleMinus };
      default:
        return { bg: "#F3F4F6", text: "#374151", icon: null };
    }
  };

  const styles = getStatusStyles(status);

  return (
    <div
      className="items-center py-1.5 rounded-[4px] w-fit h-[21px] flex gap-2 px-2 justify-center"
      style={{ backgroundColor: styles.bg, color: styles.text }}
    >
      {styles.icon && <styles.icon className="w-3.5 h-3.5" />}
      <span className="text-[13.78px] font-medium">{status}</span>
    </div>
  );
};

const LoanOverview = () => {
  interface Loan {
    id: string;
    loanPurpose: string;
    assetId: {
      assetTitle: string;
      assetCategory: string;
      assetLocation: string;
    };
    amount: number;
    duration: string;
    status: string;
    createdAt: string;
    due?: string;
  }

  const [loans, setLoans] = useState<Loan[]>([]);
  const [loading, setLoading] = useState(true);

  // dialog state
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [open, setOpen] = useState(false);

  const fetchLoans = async () => {
    try {
      const res = await api.get("/loan/");
      const data = res.data.loans;
      setLoans(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 text-[#8C94A6]">
        Loading loans...
      </div>
    );
  }

  if (loans.length === 0) {
    return (
      <Card className="border-none shadow-none rounded-none py-10 flex flex-col items-center">
        <Image
          src="/icons/empty.svg"
          width={80}
          height={80}
          alt="no loans"
          className="mb-4"
        />
        <p className="text-[#49576D] text-[14px] font-medium">
          No loans have been added yet.
        </p>
      </Card>
    );
  }

  return (
    <div>
      {loans.map((loan) => (
        <Card
          key={loan.id}
          className="border-none shadow-none rounded-none pt-2"
        >
          <CardHeader className="flex flex-row justify-between text-[15.5px] px-0 text-black font-semibold">
            <span> Loan Overview Section</span>
            <div className="flex flex-row items-center gap-2">
              <div className="border-r border-r[#E4E3EC] pr-4">
                <Image
                  src="/icons/export.svg"
                  width={24}
                  height={24}
                  alt="export"
                  className="cursor-pointer h-[41.34px] w-[41.34px] "
                />
              </div>

              <div className="w-[183.25px] h-[41.34px] bg-white flex flex-row justify-between items-center gap-2">
                <div className="bg-[#F4F3F7] h-[41.34px] w-[41.34px] rounded-full flex justify-center items-center cursor-pointer">
                  <ChevronLeft color="#8C94A6" size={16} />
                </div>
                <div className="whitespace-nowrap text-[#49576D] text-[12.06px] ">
                  1-50 of 234
                </div>
                <div className="bg-[#F4F3F7] h-[41.34px] w-[41.34px] rounded-full flex justify-center items-center cursor-pointer">
                  <ChevronRight color="#8C94A6" size={16} />
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="text-[13.78px] flex flex-col font-medium w-full justify-center items-center text-[#8C94A6] px-0">
            <Table className="scrollbar-hide">
              <TableHeader className="bg-[#F8F8FB] text-[#49576D] border-b border-b-[#E5E5E5] font-medium text-[12.06px]">
                <TableRow>
                  <TableHead>Purpose of loan</TableHead>
                  <TableHead>Asset Collateral</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Loan Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow
                  className="hover:bg-[#F8F8FB] transition-colors cursor-pointer"
                  onClick={() => {
                    setSelectedLoan(loan);
                    setOpen(true);
                  }}
                >
                  <TableCell className="text-[#1A1A1A] capitalize">
                    {loan.loanPurpose}
                  </TableCell>
                  <TableCell className="text-[#1A1A21]">
                    {loan.assetId.assetTitle}
                  </TableCell>
                  <TableCell className="text-[#1A1A21] font-semibold">
                    ${loan.amount}
                  </TableCell>
                  <TableCell className="text-[#1A1A21]">
                    {loan.duration}
                  </TableCell>
                  <TableCell className="text-[#1A1A21]">
                    <StatusBadge status={loan.status} />
                  </TableCell>
                  <TableCell className="text-[#1A1A21] gap-3 flex flex-col">
                    <div>{loan.createdAt.slice(0, 10)}</div>
                    {loan.due && (
                      <span className="text-[#49576D] flex flex-row items-center font-medium text-[12.06px]">
                        <Image
                          src={"/icons/arrow.svg"}
                          width={24}
                          height={24}
                          alt="arrow"
                        />
                        {loan.due}
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}

      <Dialog open={open} onOpenChange={setOpen}>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="max-w-md rounded-xl">
            {selectedLoan && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    {selectedLoan.assetId.assetTitle}
                  </DialogTitle>
                  <p className="text-sm text-[#49576D]">
                    {selectedLoan.assetId.assetLocation ||
                      "No location available"}
                  </p>
                </DialogHeader>

                {/* Preview asset documents 
                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-2 border border-[#E5E5E5] px-3 py-2 rounded-md text-sm font-medium text-[#49576D] hover:bg-[#F8F8FB]">
                    <Image
                      src="/icons/document.svg"
                      alt="document"
                      width={18}
                      height={18}
                    />
                    Preview asset documents
                  </button>

                  {/* Loan details table
                  <div className="text-[13.78px] font-medium text-[#1A1A1A] flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span className="text-[#49576D]">Purpose of loan</span>
                      <span>{selectedLoan.loanPurpose}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">Asset Collateral</span>
                      <span>
                        {selectedLoan.assetId.assetTitle} - Valued $
                        {selectedLoan.amount * 10}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">Amount Loaned</span>
                      <span>${selectedLoan.amount}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">Loan Duration</span>
                      <span>{selectedLoan.duration}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">
                        Interest Rate – 10%
                      </span>
                      <span>$100</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">
                        Processing Fee – 0.8%
                      </span>
                      <span>$500</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">Gas Fee – 0.2%</span>
                      <span>$20</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-[#49576D]">
                        Monthly Payment – over 6 months
                      </span>
                      <span>$1,750</span>
                    </div>

                    <div className="flex justify-between font-bold text-lg">
                      <span className="text-[#49576D]">Repayment Amount</span>
                      <span className="text-black">$10,500</span>
                    </div>
                  </div>
                </div>
                  */}

                <Button className=" cursor-pointer bg-gradient-to-r from-[#439EFF] to-[#5B1E9F] text-white px-4 py-2 rounded-[10px] flex items-center gap-2">
                  Repay Now – $1,750 Due
                </Button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Dialog>
    </div>
  );
};

export default LoanOverview;
