"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Upload } from "lucide-react";
import Image from "next/image";

export function Profile() {
  const [formData, setFormData] = useState({
    name: "Unity Finance",
    email: "example@work.com",
    country: "Nigeria",
    address: "1A Banana Island, Iie ile lei, Lagos State",
    contact: "+23456789023",
  });

  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("We only support PNGs and JPEGs");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be under 10MB");
        return;
      }

      const url = URL.createObjectURL(file);
      setAvatarUrl(url);
    }
  };

  const removeAvatar = () => {
    setAvatarUrl(null);
  };

  return (
    <Card className="shadow-none border-none pt-0 w-11/12 mx-auto">
      <CardHeader className="border-b-[1px] border-b-[#F4F3F7] pb-3.5">
        <CardTitle className="text-[20px] font-semibold">Profile</CardTitle>
        <CardDescription className="text-[#8C94A6] text-[13.78px]">
          Manage your company details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-row items-center space-y-4">
          <Avatar className="h-[80px] w-[80px]">
            <AvatarImage src={avatarUrl || undefined} />
            <AvatarFallback className="bg-[#F4F3F7]"></AvatarFallback>
          </Avatar>
          <div className=" flex flex-col space-y-2 ml-4">
            <div className="flex items-center space-x-4">
              <Label htmlFor="avatar-upload" className="cursor-pointer">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className=" h-[40px] w-[113px] border-[#F1F1F1] bg-white border-[1px] shadow-none text-[#8C94A6] text-[12px] rounded-[10px] cursor-pointer"
                >
                  <span>
                    <Image
                      src={"/icons/export.png"}
                      alt=""
                      width={20}
                      height={20}
                    />
                    Upload logo
                  </span>
                </Button>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/png,image/jpeg"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </Label>

              {avatarUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeAvatar}
                  className=" h-[40px] w-[113px] border-[#F1F1F1] cursor-pointer bg-white border-[1px] text-[#8C94A6] text-[12px] rounded-[10px]"
                >
                  Remove
                </Button>
              )}
            </div>

            <p className="text-[12px] text-[#8C94A6] text-center">
              We only support PNGs and JPEGs under 10MB
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-[13.78px] font-medium text-[#8C94A6] leading-[20.67px]"
            >
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full border-[1px] border-[#F1F1F1] rounded-[10px] shadow-none"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-[13.78px] font-medium text-[#8C94A6] leading-[20.67px]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full border-[1px] border-[#F1F1F1] rounded-[10px] shadow-none"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="country"
              className="text-[13.78px] font-medium text-[#8C94A6] leading-[20.67px] "
            >
              Country
            </Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleInputChange("country", value)}
            >
              <SelectTrigger className="w-full border-[1px] border-[#F1F1F1] rounded-[10px] shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Nigeria">Nigeria</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
                <SelectItem value="Australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="address"
              className="text-[13.78px] font-medium text-[#8C94A6] leading-[20.67px]"
            >
              Address
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              className="w-full border-[1px] border-[#F1F1F1] rounded-[10px] shadow-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="contact"
            className="text-[13.78px] font-medium text-[#8C94A6] leading-[20.67px]"
          >
            Contact
          </Label>
          <Input
            id="contact"
            value={formData.contact}
            onChange={(e) => handleInputChange("contact", e.target.value)}
            className="w-1/2 border-[1px] border-[#F1F1F1] rounded-[10px] shadow-none"
          />
        </div>
      </CardContent>
    </Card>
  );
}
