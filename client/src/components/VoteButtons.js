import React from 'react';
import AuthFormModal from './AuthFormModal';

import { Checkbox } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
export const UpvoteButton = ({ user, body, handleUpvote, size }) => {
  return user ? (
    <Checkbox
      checked={body.upvotedBy.includes(user.id)}
      icon={<ThumbUpIcon style={{ color: '#239123' }} />}
      checkedIcon={<ThumbUpIcon style={{ color: '#239123' }} />}
      onChange={handleUpvote}
      size={size || 'small'}
    />
  ) : (
    <AuthFormModal type="upvote" />
  );
};

export const DownvoteButton = ({ user, body, handleDownvote, size }) => {
  return user ? (
    <Checkbox
      checked={body.downvotedBy.includes(user.id)}
      icon={<ThumbDownIcon style={{ color: '#239123' }} />}
      checkedIcon={<ThumbDownIcon style={{ color: '#239123' }} />}
      onChange={handleDownvote}
      size={size || 'small'}
    />
  ) : (
    <AuthFormModal type="downvote" />
  );
};
