import React, { ReactNode } from 'react'
import MuiModal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import { useStyles } from './styles'

interface ModalProps {
  open: boolean;
  children?: ReactNode;
}

/**
 * Modal component
 */
export const Modal = ({ open, children }: ModalProps) => {
  const styles = useStyles()
  const handleClose = () => {}
  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={styles.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <div className={styles.content}>
          {children}
        </div>
      </Fade>
    </MuiModal>
  )
}
