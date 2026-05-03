import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="40px">
      <Typography
        variant="h1"
        color={colors.grey[100]}
        sx={{ m: "0 0 8px 0", textTransform: "uppercase" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.grey[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
