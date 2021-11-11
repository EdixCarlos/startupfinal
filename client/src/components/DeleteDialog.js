import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  ListItemIcon,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteDialog = ({ title, handleDelete, handleMenuClose, type }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    if (type !== 'comment' && type !== 'avatar') {
      handleMenuClose();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = () => {
    handleDelete();
    handleClose();
  };

  return (
    <div>
      {type === 'comment' ? (
        <Button
          onClick={handleClickOpen}
          size="small"
          color="inherit"
          startIcon={<DeleteIcon />}
          style={{ textTransform: 'none' }}
        >
          Eliminar
        </Button>
      ) : type === 'avatar' ? (
        <Button
          onClick={handleClickOpen}
          size="small"
          color="secondary"
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ textTransform: 'none' }}
        >
          Remover
        </Button>
      ) : (
        <MenuItem onClick={handleClickOpen}>
          <ListItemIcon>
            <DeleteIcon style={{ marginRight: 7 }} />
            Eliminar
          </ListItemIcon>
        </MenuItem>
      )}
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>
          {type === 'comment'
            ? 'Eliminar comentario?'
            : type === 'avatar'
            ? 'Quitar Avatar?'
            : 'Eliminar publicacion?'}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            {type === 'comment'
              ? `Estas seguro que quieres eliminar tu comentario?`
              : type === 'avatar'
              ? 'Estas seguro que quieres eliminar tu avatar?'
              : `Estas seguro que quieres eliminar tu publicacion de titulo '${title}'? Usted no podra deshacer esto.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="outlined"
            size="small"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleActionClick}
            color="primary"
            variant="contained"
            size="small"
          >
            {type === 'comment'
              ? 'Eliminar comentario'
              : type === 'avatar'
              ? 'Quitar Avatar'
              : 'Eliminar publicacion'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
