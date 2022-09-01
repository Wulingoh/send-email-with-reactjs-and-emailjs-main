import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const Card = (props) => {
  return (
    <Grid container spacing={1} marginTop={"20px"}  sx={{ backgroundColor: "#E0ECE4" }}>
      <Grid item xs={12}>
        <Typography variant="h5" component="header">
          {props.sectiontitle}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" component="body1">
          {props.description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="body2">
          {props.description2}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" component="body2">
          {props.description3}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{props.q1}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          style={{ width: "100%" }}
          id={props.q1name}
          name={props.q1name}
          onChange={props.onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">{props.q2}</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          style={{ width: "100%" }}
          id={props.q2name}
          name={props.q2name}
          onChange={props.onChange}
        />
      </Grid>
      {props.q3 != null ? (
        <>
          <Grid item xs={12}>
            <Typography variant="h6">{props.q3}</Typography>
          </Grid>
          <Grid item xs={12} marginBottom={"20px"}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: "100%" }}
              name={props.q3name}
              id={props.q3name}
              onChange={props.onChange}
            />
          </Grid>
        </>
      ) : (
        ""
      )}
    </Grid>
  );
};
