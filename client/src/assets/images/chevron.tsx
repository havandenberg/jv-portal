import React from 'react';

import th from 'ui/theme';

interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const Chevron = ({ color = th.colors.brand.secondary, ...rest }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...rest}>
      <path
        d="M367.954 213.588L160.67 5.872c-7.804-7.819-20.467-7.831-28.284-.029-7.819 7.802-7.832 20.465-.03 28.284l207.299 207.731c7.798 7.798 7.798 20.486-.015 28.299L132.356 477.873c-7.802 7.819-7.789 20.482.03 28.284A19.935 19.935 0 00146.513 512c5.125 0 10.25-1.958 14.157-5.873l207.269-207.701c23.394-23.394 23.394-61.459.015-84.838z"
        fill={color}
      />
    </svg>
  );
};

export default Chevron;
