import React from "react";
import UserAddressCard from "../../components/UserProfile/UserAddressCard";
import UserInfoCard from "../../components/UserProfile/UserInfoCard";
import UserMetaCard from "../../components/UserProfile/UserMetaCard";
import Geography from "../../components/UserProfile/Geography";
function BrgyInfo() {
  return (
    <div>
      <UserMetaCard />

      <UserAddressCard />
      <Geography/>
      <UserInfoCard />
    </div>
  );
}

export default BrgyInfo;
