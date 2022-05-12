import Style from "./Articles.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Articles = () => {
  const secen = useSelector;
  const { userSlug } = useParams();
  const slug = Number(userSlug);
  const [resData, setResData] = useState(null);

  const load = async () => {
    let data = await secen((state) => state.data.value);
    if (data) {
      const obj = data.find((item) => item.id === slug);
      setResData(obj);
      console.log(resData);
    }
  };
  load();

  return (
    <div className={Style.main}>
      {resData && (
        <Card className={Style.box}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {resData.firstName.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${resData.firstName} ${resData.lastName}`}
            subheader={resData.birthDate}
          />

          <CardContent>
            <div className={Style.center}>
              <img src={resData.image} alt="" />
              <Typography variant="body2" color="text.secondary">
                adress : {resData.address.address}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                city : {resData.address.city}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Postal Code : {resData.postalCode}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                state : {resData.state}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                university : {resData.university}
              </Typography>
            </div>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <Button variant="outlined" href="#outlined-buttons">
            <Link to="/">Back To Home</Link>
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Articles;
