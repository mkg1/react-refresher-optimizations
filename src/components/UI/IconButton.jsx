import { memo } from 'react';
import { log } from '../../log.js';

// note: when using memo here, it initiall didn't work bc ...props contained onClick functions from the Counter component
// those onClick functions (which are handleDecrement and handleIncrement) don't change BUT they do re-render at a different place in memory so looks like they change
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
})

export default IconButton;