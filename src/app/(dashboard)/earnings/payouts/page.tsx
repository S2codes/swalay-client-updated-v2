"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import toast from "react-hot-toast";
import UserContext from "@/context/userContext";
import { apiGet, apiPost } from "@/helpers/axiosRequest";
import { PayoutList } from "../components/PayoutList";

const Payments = () => {
  const context = useContext(UserContext) || null;
  const labelId = context?.user?._id;

  const [data, setData] = useState({
    amount: "",
  });

  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [paymentData, setPaymentData] = useState();
  // const [totalPayoutBalance, setTotalPayoutBalance] = useState(0);
  // const [availableBalance, setAvailableBalance] = useState(0);

  const [payout, setPayout] = useState();

  const fetchPayments = React.useCallback(async () => {
    try {
      const response = await apiGet(
        `/api/payments/getPayments?labelId=${labelId}`
      );
      if (response.success) {
        console.log("success");
        // setPaymentData(response.data.payments);
        // setTotalPayoutBalance(response.data.totalPayoutBalance);
        // setAvailableBalance(response.data.totalBalance);
      }
    } catch (error) {
      console.log("error");
    }
  }, [labelId]);

  const fetchPayOut = React.useCallback(async () => {
    try {
      const response = await apiGet(
        `/api/payments/payout/getPayouts?labelId=${labelId}`
      );
      if (response.success) {
        setPayout(response.data);
      }
    } catch (error) {
      console.log("error");
    }
  }, [labelId]);

  useEffect(() => {
    if (labelId) {
      fetchPayments();
      fetchPayOut();
    }
  }, [labelId, fetchPayments, fetchPayOut]); // Include dependencies

  // const handleSave = async () => {
  //   // Handle save logic here
  //   try {
  //     const response = await apiPost("/api/payments/payout/payoutRequest", {
  //       labelId,
  //       amount: data.amount,
  //     });

  //     setIsModalVisible(false);
  //     if (response.success) {
  //       toast.success(response.message);
  //       fetchPayOut();
  //     } else {
  //       toast.error(response.message);
  //     }
  //     setData({ amount: "" });
  //   } catch (error) {
  //     toast.error("Internal server");
  //   }
  // };

  // const handleClose = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <div className="w-full min-h-[80dvh] p-6 bg-white rounded-sm ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Payments</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Payouts</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-between items-center mt-3">
        <h3 className="text-3xl font-bold mb-2 text-blue-500">
          All Payout Details
        </h3>
      </div>

      <div className="bg-white ">{payout && <PayoutList data={payout} />}</div>
    </div>
  );
};

export default Payments;
