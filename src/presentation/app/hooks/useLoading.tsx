import { createContext, useContext, useState } from 'react';

import { Loading } from '../components/loading';

interface IContext {
  loading: boolean;
  setLoading: (prevState: boolean) => void;
  loadingWithTime: (duration: number) => void;
  toggleLoading: () => void;
}

export const LoadingContext = createContext<IContext>({} as IContext);

interface IProps {
  children: JSX.Element;
}

const LoadingProvider = ({ children }: IProps) => {
  const [loading, setLoading] = useState(false);

  const loadingWithTime = (duration: number) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, duration);
  };

  const toggleLoading = () => {
    setLoading((prevState) => !prevState);
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        loadingWithTime,
        toggleLoading,
      }}
    >
      {loading && <Loading />}
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  return useContext(LoadingContext);
};

export { LoadingProvider, useLoading };
