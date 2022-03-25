import { createContext } from 'react';

interface HomeContextInterface {
  viewport: string;
  fullLoading: boolean;
  setFullLoading: (value: boolean) => void;
}

const HomeContext = createContext<HomeContextInterface | undefined>(undefined);

export default HomeContext;
