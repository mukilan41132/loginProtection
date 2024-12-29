import React  from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const ConfirmLogoutDialog = ({ open, onClose, onLogout }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogContent>
                Are you sure you want to logout?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onLogout} color="secondary">
                    Logout
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmLogoutDialog;
