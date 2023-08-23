import Plus from '../../images/plus.svg';
import { ADD_DATASET } from '../../constants';
import { Box, Button } from '@material-ui/core';
import config from "./../../config/app.json";

const SidebarFooter = (props) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Button
        variant='contained'
        disableElevation
        color='primary'
        style={{ "width" : "45%","minWidth" : "45%" }}
        onClick={() => props.setOpenUploadDialog(true)}
      >
        <img src={Plus} alt='Plus' />
        {ADD_DATASET}
      </Button>
      <Button
        variant='contained'
        disableElevation
        color='primary'
        style={{ "width" : "45%", "minWidth" : "45%" }}
        onClick={() => props.setOpenDatasetsListDialog(true)}
      >
        {config.text.datasetsButtonText}
      </Button>
    </Box>
    <Box display="flex" justifyContent="space-between">
      <div style="color: white; font-size: 12px;">
        <a href="{config.docs_url}" target="_blank">User manual</a>
      </div>
    </Box>
  );
};

export default SidebarFooter;
