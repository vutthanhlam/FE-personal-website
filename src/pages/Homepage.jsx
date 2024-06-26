import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import { Stack } from "@mui/material";

function Homepage() {
  return (
    <Stack style={{ minHeight: "100vh" }}>
      <Header />

      <Footer />
    </Stack>
    // <div className="container">

    // </div>
  );
}

export default Homepage;
