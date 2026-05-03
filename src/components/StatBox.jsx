import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" p="20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colors.grey[100], mt: "10px" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="10px">
        <Typography variant="h5" sx={{ color: colors.grey[400] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: colors.blueAccent[400] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
