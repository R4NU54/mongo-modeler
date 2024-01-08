import { useThemeContext } from '@/core/providers';
import classes from '@/pods/toolbar/toolbar.pod.module.css';
import { DarkIcon, LightIcon } from '@/common/components/icons';
import { ToolbarButton } from '../toolbar-button';

interface Props {
  darkLabel: string;
  lightLabel: string;
}
export const ThemeToggleButton: React.FC<Props> = ({
  darkLabel,
  lightLabel,
}) => {
  const { theme, toggleTheme } = useThemeContext();
  const label = theme.themeMode === 'dark' ? darkLabel : lightLabel;
  return (
    <ToolbarButton
      className={classes.button}
      icon={theme.themeMode === 'dark' ? <DarkIcon /> : <LightIcon />}
      label={label}
      onClick={toggleTheme}
    />
  );
};
