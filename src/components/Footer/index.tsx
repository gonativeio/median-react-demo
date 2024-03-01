import Label from 'components/Label';
import React from 'react';
import { HEADER_MAX_WIDTH, HEADER_PADDING } from 'utils/constants';
import styles from './styles.module.scss';

interface Props {
  contentMaxWidth?: number;
  contentPadding?: number;
  type?: 'default' | 'none';
}

const Footer: React.FC<Props> = ({
  contentMaxWidth = HEADER_MAX_WIDTH,
  contentPadding = HEADER_PADDING,
  type = 'default',
}) => {
  if (type === 'none') {
    return null;
  }

  return (
    <div
      className={styles.container}
      style={{
        paddingLeft: contentPadding,
        paddingRight: contentPadding,
      }}
    >
      <div className={styles.content} style={{ maxWidth: contentMaxWidth }}>
        <Label size="h5" type="light">
          © 2014-2024, Median.co by GoNative.io LLC. All rights reserved.
        </Label>
      </div>
    </div>
  );
};

export default Footer;