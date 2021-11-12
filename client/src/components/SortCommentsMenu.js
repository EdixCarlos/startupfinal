import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortComments } from '../reducers/postCommentsReducer';

import { Select, MenuItem, Typography } from '@material-ui/core';
import { useSortCommentsStyles } from '../styles/muiStyles';
import SortIcon from '@material-ui/icons/Sort';

const SortCommentsMenu = () => {
  const classes = useSortCommentsStyles();
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('old');

  const handleSortComments = (value) => {
    setSortBy(value);
    dispatch(sortComments(value));
  };

  return (
    <div className={classes.root}>
      <Typography variant="button" className={classes.label}>
        <SortIcon style={{ marginRight: '8px' }} color="primary" />
        Buscar por
      </Typography>
      <form>
        <Select value={sortBy}>
          <MenuItem value="old" onClick={() => handleSortComments('old')}>
            Antiguos
          </MenuItem>
          <MenuItem value="new" onClick={() => handleSortComments('new')}>
            Nuevo
          </MenuItem>
          <MenuItem
            value="upvoted"
            onClick={() => handleSortComments('upvoted')}
          >
           Mas votado
          </MenuItem>
          <MenuItem
            value="downvoted"
            onClick={() => handleSortComments('downvoted')}
          >
            Menos votado
          </MenuItem>
          <MenuItem
            value="replied"
            onClick={() => handleSortComments('replied')}
          >
            Mas controversial
          </MenuItem>
        </Select>
      </form>
    </div>
  );
};

export default SortCommentsMenu;
