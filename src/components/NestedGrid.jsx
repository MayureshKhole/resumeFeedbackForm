import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow({ technologyList, data }) {
  console.log(data);
  console.log("technologyList", technologyList);
  const renderSkill = (skill) => {
    return (
      <Grid item xs={4}>
        <Item>
          <Grid container justifyContent={"space-between"} alignItems="center">
            <Grid item>{skill.name}</Grid>
            <Grid item>
              <FormControl
                sx={{ maxWidth: 75 }}
                size="small"
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weight"
                  endAdornment={
                    <InputAdornment position="end">/10</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-text">
        Weight
      </FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    );
  };
  return (
    <React.Fragment>
      {technologyList.isSoftskill &&
        technologyList.data[0].skills.map((skill) => renderSkill(skill))}

      {technologyList.data
        .filter((t) => t.isSelected)
        .map((tech) => tech.skills.map((skill) => renderSkill(skill)))}
    </React.Fragment>
  );
}

export default function NestedGrid(technologyList) {
  console.log("nested", technologyList);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow technologyList={technologyList} />
        </Grid>
      </Grid>
    </Box>
  );
}
