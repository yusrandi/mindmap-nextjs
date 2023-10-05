'use client'
import { NotificationIcon } from "@/icons/NotificationIcon";
import { AcmeIcon } from "@/icons/acme-icon";
import { Books } from "@/icons/books";
import { Community } from "@/icons/community";
import { CustomersIcon } from "@/icons/sidebar/customers-icon";
import { PaymentsIcon } from "@/icons/sidebar/payments-icon";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export const CardBalance1 = () => {
  return (
    <Card className="xl:max-w-lg rounded-xl px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <Books />
          <div className="flex flex-col">
            <span className="text-default-900">Jumlah Materi</span>
            {/* <span className="text-default-900 text-xs">+2400 People</span> */}
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            6
          </span>
          <span className="text-danger text-xs">BAB</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {"↓"}
              </span>
              <span className="text-xs">jumlah seluruh materi</span>
            </div>
            <span className="text-default-900 text-xs"></span>
          </div>


        </div>
      </CardBody>
    </Card>
  );
};
