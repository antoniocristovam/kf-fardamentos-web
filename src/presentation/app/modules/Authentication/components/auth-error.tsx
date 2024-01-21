import { AnimatePresence, motion } from 'framer-motion';
import { UncontrolledAlert } from 'reactstrap';

interface IProps {
  message: string;
}

export const AuthError = ({ message }: IProps) => {
  return (
    <div className="mb-2">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <UncontrolledAlert
            color="danger"
            className="alert-solid alert-dismissible bg-danger text-white alert-label-icon fade show mb-xl-0"
            closeClassName="btn-close-white"
          >
            <i className="ri-error-warning-line label-icon"></i>
            <strong>{message}</strong>
          </UncontrolledAlert>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
