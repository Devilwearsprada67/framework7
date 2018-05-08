import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7MessagebarSheet extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const classes = Utils.classNames(this.props.className, 'messagebar-sheet', Mixins.colorClasses(this));
    return React.createElement('div', {
      id: this.props.id,
      style: this.props.style,
      className: classes
    }, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this.props);
  }
}
__reactComponentSetProps(F7MessagebarSheet, {
  id: [
    String,
    Number
  ],
  ...Mixins.colorProps
});
export default F7MessagebarSheet;