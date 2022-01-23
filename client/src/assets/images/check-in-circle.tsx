import React from 'react';

import th from 'ui/theme';

const CheckInCircle = ({
  fill = th.colors.brand.secondary,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height={32} viewBox="0 0 32 32" width={32} fill={fill} {...rest}>
      <g fill={fill}>
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.836 0 16-7.164 16-16 0-8.837-7.164-16-16-16zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
        <path d="M23.3 10.393L13.012 20.589l-4.281-4.196a1.016 1.016 0 00-1.428 0 .992.992 0 000 1.414l4.999 4.899c.41.361 1.023.401 1.428 0l10.999-10.899a.994.994 0 000-1.414 1.019 1.019 0 00-1.429 0z" />
      </g>
    </svg>
  );
};

export default CheckInCircle;
