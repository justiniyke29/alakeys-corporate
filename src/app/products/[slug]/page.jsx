"use client";

import React, { useState, useEffect } from "react";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import ServiceDetail1 from "@/components/section/ServiceDetail1";
import axios from "axios";
import { Loader } from "@/components/Loader";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const response = await axios.get(`/api/fetch-products?id=${params.slug}`);
      setProduct(response.data?.data);
      setIsLoading(false);
    }
    fetchProducts();
  }, [params]);

  console.log("product", product);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" pt-60">
          <Breadcumb3 path={["Products", `${product?.tag}`]} />
          <ServiceDetail1 {...product} />
        </div>
      )}
    </>
  );
}
