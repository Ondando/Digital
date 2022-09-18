import React from 'react';
import ThDrawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

interface IDrawer {
  isOpen: boolean
  setIsOpen: any
}
export default function Drawer({ isOpen, setIsOpen }:IDrawer) {
  return (
    <ThDrawer open={isOpen} anchor="left" variant="temporary" onClose={() => setIsOpen(false)}>
      <DrawerContent />
    </ThDrawer>
  );
}
