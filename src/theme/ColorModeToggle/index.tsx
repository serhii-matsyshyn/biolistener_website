import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import type {Props} from '@theme/ColorModeToggle';

// Two-way switch: light and dark only. The site still starts in the visitor's
// system theme; the toggle just does not offer "system" as a third step.
export default function ColorModeToggleWrapper(props: Props): React.ReactElement {
  const {colorMode} = useColorMode();
  // While no choice is stored the value is null: use the theme actually shown,
  // so the first click always switches to the other one.
  return <ColorModeToggle {...props} value={props.value ?? colorMode} respectPrefersColorScheme={false} />;
}
