"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WAITLIST_ENDPOINT =
  process.env.NEXT_PUBLIC_WAITLIST_URL ||
  "https://backend-al2j.onrender.com/api/waitlist";

type WaitlistEntry = {
  fullName: string;
  email: string;
  country: string;
  telegramUsername?: string;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  pages: number;
};

const WaitlistPage = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchWaitlist = async (page = 1) => {
    try {
      setLoading(true);

      const res = await fetch(`${WAITLIST_ENDPOINT}?page=${page}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed to fetch waitlist");

      const data = await res.json();
      console.log("Fetched waitlist data:", data);

      setEntries(data.data || []);
      setPagination(data.pagination || null);
    } catch (err) {
      console.error(err);
      toast.error("Unable to load waitlist");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWaitlist(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    if (pagination && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (pagination && currentPage < pagination.pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="w-full bg-gray-50 font-inter min-h-screen py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        {/* Page Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-gray-800">
              Waitlist Entries
            </h2>
          </div>
          <p className="text-gray-600">
            View and manage all people who joined the waitlist.
          </p>
        </div>

        {/* Content */}
        <Card className="border border-gray-100">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-700">
              Total Entries:{" "}
              <span className="text-primary">{pagination?.total || 0}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-16">
                <Loader2 className="animate-spin w-8 h-8 text-primary" />
              </div>
            ) : entries.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No entries found.
              </p>
            ) : (
              <>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-100">
                        <TableHead className="text-gray-700 font-semibold">
                          Name
                        </TableHead>
                        <TableHead className="text-gray-700 font-semibold">
                          Email
                        </TableHead>
                        <TableHead className="text-gray-700 font-semibold">
                          Country
                        </TableHead>
                        <TableHead className="text-gray-700 font-semibold">
                          Telegram
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {entries.map((entry, idx) => (
                        <TableRow
                          key={idx}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <TableCell className="capitalize font-medium">
                            {entry.fullName}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {entry.email}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {entry.country}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {entry.telegramUsername || "-"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                {/* Pagination Controls */}
                {pagination && pagination.pages > 1 && (
                  <div className="flex items-center justify-between mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                    </Button>

                    <p className="text-sm text-gray-600">
                      Page{" "}
                      <span className="font-medium">{pagination.page}</span> of{" "}
                      <span className="font-medium">{pagination.pages}</span>
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNext}
                      disabled={currentPage === pagination.pages}
                    >
                      Next <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WaitlistPage;
