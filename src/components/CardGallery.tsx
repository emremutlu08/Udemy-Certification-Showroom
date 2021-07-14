import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://udemy-certificate.s3.amazonaws.com/image/UC-ee77a79b-0578-48ee-9a75-e5c63e5453b4.jpg"
                title="The Complete JavaScript Course 2021: From Zero to Expert!"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                  <Link
                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                    underline="none"
                    target="_blank"
                  >
                    The Complete JavaScript Course 2021: From Zero to Expert!
                  </Link>
                </Typography>
                <Typography>What did I learn: </Typography>
                <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="Javascript" />
                  </Grid>
                  <Grid item>
                    <Chip label="Express" />
                  </Grid>
                  <Grid item>
                    <Chip label="React Native" />
                  </Grid>
                  <Grid item>
                    <Chip label="Flutter" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                  <Grid item>
                    <Chip label="React" />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://udemy-certificate.s3.amazonaws.com/image/UC-ee77a79b-0578-48ee-9a75-e5c63e5453b4.jpg"
                  target="_blank"
                >
                  View Certificate
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href="https://github.com/emremutlu08?tab=repositories"
                  target="_blank"
                >
                  View Codes On My GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
