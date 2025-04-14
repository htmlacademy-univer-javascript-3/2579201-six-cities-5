import { useAppSelector } from '../../hooks/useAppSelector';
import './ErrorMessage.css';

const ErrorMesage = () => {
  const error = useAppSelector((state)=> state.error);
  return (error) ? <div className="error-message">{error}</div> : null;
};

export {ErrorMesage};
