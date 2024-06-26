import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack } from "@mui/material";

function Footer() {
  return (
    <Container className="py-3 custom-footer border-top mt-auto px-0">
      <Stack direction="horizontal">
        <span className="text-body-secondary d-flex align-items-center">
          © 2024 Lam Vu
        </span>
        <a href="#" className="ms-auto text-body-secondary">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="#" className="text-body-secondary">
          <LinkedInIcon fontSize="large" />
        </a>
      </Stack>
    </Container>
  );
}

export default Footer;
