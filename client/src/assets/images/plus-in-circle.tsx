import React from 'react';

import th from 'ui/theme';

const PlusInCircle = ({
  fill = th.colors.status.success,
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="512pt"
      viewBox="0 0 512 512"
      width="512pt"
      fill={fill}
      {...rest}
    >
      <path d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm112 277.332h-90.668V368c0 11.777-9.555 21.332-21.332 21.332s-21.332-9.555-21.332-21.332v-90.668H144c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332h90.668V144c0-11.777 9.555-21.332 21.332-21.332s21.332 9.555 21.332 21.332v90.668H368c11.777 0 21.332 9.555 21.332 21.332s-9.555 21.332-21.332 21.332zm0 0" />
    </svg>
  );
};

export default PlusInCircle;
