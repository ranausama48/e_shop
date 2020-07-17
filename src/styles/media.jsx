import { css } from "styled-components";

const sizes = {
  largDesktop: 1440,
  smalldesktop: 1200,
  minidesktop: 992,
  tablet: 767,
  minitablet: 575,
  mobile: 480,
  smallmobile: 376,
  minimobile: 330,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
