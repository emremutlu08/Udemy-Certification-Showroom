import HeroContent from "./HeroContent";
import CardGallery from "./CardGallery";
import { makeStyles } from "@material-ui/core";

export default function AppBarComponent() {
  const useStyles = makeStyles((theme) => ({
    main: {
      backgroundColor: theme.palette.background.default,
    },
  }));
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <HeroContent />
      <CardGallery />
    </main>
  );
}
