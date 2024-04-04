import Grid from "@mui/material/Unstable_Grid2";
import styles from "./home.module.css";

export default function Home() {
  return (
    <Grid className="tw-w-full">
      <Grid className={styles.homeback}>
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            id="Layer"
            d="m0 160l48.3 5.9c24 0 62.7 2.9 110.7-18.4 48-21.7 84-78.4 132-89.4 48-11 102.5 5.2 150.5 36.9 48 32.3 92.5 76.6 140.5 103.6 48 27 90 44.1 138 41.4 48.2-2.7 100.7-29.3 148.7-55.6 48-26.7 85.4-63.5 133.4-58.2 48 5.7 104 56.9 154.8 71 51.1 14.2 89.4 21.3 139.1 0.1 50.4-21.4 81-78.9 105-105.2l39-28.1v-64h-24c-24 0-72 0-120 0q-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0-72 0-144 0c-48 0-96 0-120 0h-24z"
          ></path>
        </svg>
        <Grid className="tw-w-svw tw-h-svh">
          <Grid md={6} className=""></Grid>
          <Grid md={6} className=""></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
