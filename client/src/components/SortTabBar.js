import React from 'react';
import { ReactComponent as Best } from '../svg/best.svg';
import { ReactComponent as Hot } from '../svg/hot.svg';
import { ReactComponent as New } from '../svg/new.svg';
import { ReactComponent as Top } from '../svg/top.svg';
import { ReactComponent as Controversial } from '../svg/controversial.svg';
import { ReactComponent as Old } from '../svg/old.svg';
import { ReactComponent as Subscribed } from '../svg/subscribed.svg';

import { Paper, Tabs, Tab, SvgIcon } from '@material-ui/core';
import { useSortTabStyles } from '../styles/muiStyles';

const SortTabBar = ({ sortBy, handleTabChange, subscribedTab, user }) => {
  const classes = useSortTabStyles();

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <Tabs
        value={sortBy}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Hot />
            </SvgIcon>
          }
          label="Hot"
          value="hot"
        />
        {subscribedTab && user && (
          <Tab
            icon={
              <SvgIcon fontSize="small">
                <Subscribed />
              </SvgIcon>
            }
            label="Supscripciones"
            value="subscribed"
          />
        )}
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Best />
            </SvgIcon>
          }
          label="Mejores"
          value="best"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <New />
            </SvgIcon>
          }
          label="Nuevos"
          value="new"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Top />
            </SvgIcon>
          }
          label="Top"
          value="top"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Controversial />
            </SvgIcon>
          }
          label="Controversial"
          value="controversial"
        />
        <Tab
          icon={
            <SvgIcon fontSize="small">
              <Old />
            </SvgIcon>
          }
          label="Antiguos"
          value="old"
        />
      </Tabs>
    </Paper>
  );
};

export default SortTabBar;
