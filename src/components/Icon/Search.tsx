import * as React from "react";

function SvgComponent(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <title>{"SaaS/Cross/icn/filled/Search"}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path d="M2 2h12v12H2z" />
        <path
          d="M6.985 11.883c.987 0 1.91-.294 2.689-.788l2.656 2.626a.98.98 0 00.707.279.944.944 0 00.963-.963.97.97 0 00-.273-.692l-2.633-2.618c.546-.796.875-1.75.875-2.785C11.97 4.22 9.73 2 6.985 2 4.239 2 2 4.22 2 6.942c0 2.713 2.24 4.941 4.985 4.941zm-.11-1.633C5.027 10.25 3.5 8.729 3.5 6.879A3.393 3.393 0 016.875 3.5a3.393 3.393 0 013.375 3.379c0 1.85-1.527 3.371-3.375 3.371z"
          fill="#031B4A"
        />
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
