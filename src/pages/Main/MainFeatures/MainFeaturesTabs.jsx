import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function MainFeatureTabs({ features }) {
  const [value, setValue] = useState(0);
  const [ww, setWw] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWw(window.innerWidth));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (ww <= 900) {
    return (
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant={window.innerWidth < 475 ? "scrollable" : "standard"}
          centered={window.innerWidth >= 475 && true}
          scrollButtons
          allowScrollButtonsMobile
        >
          {features.map((item) => (
            <Tab key={item.title} label={item.title} style={{margin: '0 7px'}} />
          ))}
        </Tabs>
        {features.map((item, idx) => {
          return (
            <TabPanel key={item.title} value={value} index={idx}>
              {item.text}
            </TabPanel>
          );
        })}
      </div>
    );
  } else return null;
}
