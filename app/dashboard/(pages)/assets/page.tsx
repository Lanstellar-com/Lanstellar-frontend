import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div>
      <Image src="/empty.svg" alt="Logo" width={100} height={100} />
      <h2>Assets</h2>
      <p>You haven’t added any asset! Add one and get started.</p>
      <Button>
        <Plus />
        Add Asset
      </Button>
    </div>
  );
};

export default Page;
