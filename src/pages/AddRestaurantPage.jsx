import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import Link from "../components/Link";

export default function AddRestaurantPage() {
  return (
    <SectionWrapper
      header={"Are you hungry?"}
      title={["Add a ", "new", "restaurant"]}
    >
      <Link to={"/"}>Home </Link>
    </SectionWrapper>
  );
}
