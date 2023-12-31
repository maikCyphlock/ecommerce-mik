"use client";
import React, { Suspense } from "react";
import { UserButton } from "@clerk/nextjs";
function user() {
  return (
    <Suspense fallback={<div className="loading loading-spinner "></div>}>
      <UserButton afterSignOutUrl="/" />
    </Suspense>
  );
}

export default user;
