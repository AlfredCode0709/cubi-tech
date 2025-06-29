import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "@/components/common/card/InfoCard";
import styles from "@/styles/cubifood.module.scss";
import { FC, Fragment, useState } from "react";

const initialTreasures = [
  { title: "Treasure 1", description: "Treasure Description 1" },
  { title: "Treasure 2", description: "Treasure Description 2" },
  { title: "Treasure 3", description: "Treasure Description 3" },
  { title: "Treasure 4", description: "Treasure Description 4" },
  { title: "Treasure 5", description: "Treasure Description 5" },
  { title: "Treasure 6", description: "Treasure Description 6" },
  { title: "Treasure 7", description: "Treasure Description 7" },
];

const DesktopView: FC = () => {
  /* The main card is always treasures[0] */
  const [treasures, setTreasures] = useState(initialTreasures);

  /* Swap main card with the selected secondary card */
  const handleViewClick = (index: number) => {
    if (index === 0) return; /* Already main, do nothing */
    const newTreasures = [...treasures];
    /* Swap the main (0) and selected (index) */
    [newTreasures[0], newTreasures[index]] = [
      newTreasures[index],
      newTreasures[0],
    ];
    setTreasures(newTreasures);
  };

  return (
    <Fragment>
      <Typography className={styles.header}>Top Treasures</Typography>
      <Grid container className={styles.treasuresView} spacing={2}>
        {/* Main treasure card */}
        <Grid size={4}>
          <InfoCard
            {...treasures[0]}
            cardImage={"https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"}
            descr={treasures[0].description}
            brand={"CubiFood"}
            isMain
            onViewClick={() => handleViewClick(0)}
          />
        </Grid>

        {/* Additional treasure cards */}
        <Grid size={8} container spacing={2}>
          {treasures.slice(1).map((treasure, idx) => (
            <Grid size={4} key={idx + 1}>
              <InfoCard
                {...treasure}
                cardImage={"https://ik.imagekit.io/a1fr3d10/cubifood_light.svg"}
                descr={treasure.description}
                brand={"CubiFood"}
                onViewClick={() => handleViewClick(idx + 1)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DesktopView;
