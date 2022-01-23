import React from 'react';

import th from 'ui/theme';

const MessageUnread = ({
  fill = th.colors.brand.primary,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height={512} viewBox="0 0 24 24" width={512} fill={fill} {...rest}>
      <path d="M21.5 4h-19A2.503 2.503 0 000 6.5v11C0 18.878 1.122 20 2.5 20h19c1.378 0 2.5-1.122 2.5-2.5v-11C24 5.122 22.878 4 21.5 4zm.5 5.41l-8.61 4.5c-.43.22-.91.34-1.39.34s-.95-.12-1.39-.34L2 9.41V7.15l9.53 4.98c.29.15.65.15.94 0L22 7.15z" />
    </svg>
  );
};

export default MessageUnread;
