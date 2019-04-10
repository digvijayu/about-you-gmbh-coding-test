import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

interface TextProps {
  values?: {
    [key: string]: string | number | boolean | Date | JSX.Element;
  };
  children: string;
}

class Text extends Component<TextProps> {
  render() {
    const { children, values } = this.props;
    return (
      <FormattedMessage id={children} values={values} defaultMessage={children}>
        {text => text}
      </FormattedMessage>
    );
  }
}

export default Text;
