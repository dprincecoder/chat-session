import {
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import contractSvg from "./imgs/contracts.svg";
import forcast from "./imgs/forcast.svg";
import helpdesk from "./imgs/helpdesk.svg";
import rfp from "./imgs/rfp.svg";
type CardProps = {
  children: ReactNode;
};

const HomeScreen = () => {
  const styles = {
    h2: {
      color: "#2A2A2A",
      fontSize: "28px",
      fontFamily: "Aria, sans-serif",
      fontWeight: 700,
      lineHeight: "40px",
      textTransform: "uppercase",
    },
    p: {
      color: "#555",
      fontSize: "16px",
      fontFamily: "Aria, sans-serif",
      lineHeight: "24px",
      marginTop: "1rem",
    },
  };

  function SkillCard({ children }: CardProps) {
    return (
      <div
        className="skill-card"
        style={{
          display: "flex",
          padding: "24px 16px",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px",
          flex: "1 0 0",
          borderRadius: "10px",
          border: "1px solid #E9E9E9",
          background: "#FFF",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h1" sx={styles.h2}>
        Welcome
      </Typography>
      <Typography variant="body1" sx={styles.p}>
        This tool can help you extract important details from our library of
        documents.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: "#2A2A2A",
          fontSize: "18px",
          fontFamily: "Aria, sans-serif",
          fontWeight: 700,
          lineHeight: "22px",
          textTransform: "uppercase",
          marginTop: "2rem",
        }}
      >
        Choose a Skill
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "5px" }}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <SkillCard>
            <CardContent
              sx={{ display: "flex", alignItems: "center", padding: "0 0" }}
            >
              <IconButton color="primary">
                <img src={contractSvg} alt="contracts" />
              </IconButton>
              <Typography variant="h5">Contracts</Typography>
            </CardContent>
            <div
              style={{
                border: "2px solid #000",
                borderRadius: "15px",
                color: "#2A2A2A",
                padding: "5px 20px",
              }}
            >
              Start Now
            </div>
          </SkillCard>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <SkillCard>
            <CardContent
              sx={{ display: "flex", alignItems: "center", padding: "0 0" }}
            >
              <IconButton color="primary">
                <img src={helpdesk} alt="helpdesk" />
              </IconButton>
              <Typography variant="h5">Helpdesk</Typography>
            </CardContent>
            <div
              style={{
                border: "2px solid #000",
                borderRadius: "15px",
                color: "#2A2A2A",
                padding: "5px 20px",
              }}
            >
              Start Now
            </div>
          </SkillCard>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <SkillCard>
            <CardContent
              sx={{ display: "flex", alignItems: "center", padding: "0 0" }}
            >
              <IconButton color="primary">
                <img src={rfp} alt="rfp" />
              </IconButton>
              <Typography variant="h5">RFP</Typography>
            </CardContent>
            <div
              style={{
                border: "2px solid #000",
                borderRadius: "15px",
                color: "#2A2A2A",
                padding: "5px 20px",
              }}
            >
              Start Now
            </div>
          </SkillCard>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <SkillCard>
            <CardContent
              sx={{ display: "flex", alignItems: "center", padding: "0 0" }}
            >
              <IconButton color="primary">
                <img src={forcast} alt="forcast" />
              </IconButton>
              <Typography variant="h5">Forcast</Typography>
            </CardContent>
            <div
              style={{
                border: "2px solid #000",
                borderRadius: "15px",
                color: "#2A2A2A",
                padding: "5px 20px",
              }}
            >
              Start Now
            </div>
          </SkillCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeScreen;
