import React, { JSX } from 'react';
import { Dialog, Portal } from 'react-native-paper';

interface ConfirmationDialogProps {
  visible: boolean;
  show: () => void;
  title?: string | JSX.Element;
  content?: string | JSX.Element;
  buttons: JSX.Element | JSX.Element[];
  dismissableBackButton?: boolean;
}

const ConfrimationDialog = (props: ConfirmationDialogProps) => {
  const { visible, show, title, content, buttons, dismissableBackButton } =
    props;

  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={show}
        dismissableBackButton={dismissableBackButton}
      >
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>{content}</Dialog.Content>
        <Dialog.Actions>{buttons}</Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ConfrimationDialog;
