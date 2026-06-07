import { useEffect, useState } from 'react';
import { sound } from '../utils/sound';

export function useSoundMuted() {
  const [muted, setMuted] = useState(() => sound.muted);

  useEffect(() => {
    const unsub = sound.subscribe(setMuted);
    return unsub;
  }, []);

  return [muted, () => sound.toggle()];
}
