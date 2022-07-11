import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./Feature.scss";
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
const Feature = () => {
  return (
    <div className="feature">
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="spun">
          The Matrix is a 1999 science fiction action film[5][6] written and
          directed by the Wachowskis.[a] It is the first installment in The
          Matrix film series, starring Keanu Reeves, Laurence Fishburne,
          Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano.The Matrix opened
          in theaters in the United States on March 31, 1999 to widespread
          acclaim from critics, who praised its innovative visual effects.
        </span>

        <div className="btn">
          <div className="play">
            <PlayCircleFilledOutlinedIcon />
            <span>Play</span>
          </div>
          <div className="infoicon">
            <InfoOutlinedIcon />
            <span>info!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
