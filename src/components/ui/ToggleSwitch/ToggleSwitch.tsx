'use client';

import { SunOutline, MoonOutline } from '@graywolfai/react-heroicons';
import { useTheme } from '@/context/ThemeContext';
import styles from './toggleswitch.module.scss';

export const ToggleSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        id="toggle"
        className={styles.toggleCheckbox}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className={styles.toggleLabel}>
        <div className={styles.toggleHandle}>
          {isDarkMode ? <SunOutline /> : <MoonOutline />}
        </div>
      </label>
    </div>
  );
};
