import { createContext, useContext } from 'react';

export const IntroContext = createContext({
  ready: true,
  replay: () => {},
});

export const useIntroReady = () => useContext(IntroContext).ready;
export const useIntroReplay = () => useContext(IntroContext).replay;
