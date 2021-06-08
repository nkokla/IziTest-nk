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
      xmlnsXlink="http://www.w3.org/1999/xlink"
      ref={svgRef}
      {...props}
    >
      <title>{"SaaS/Cross/icn/filled/Filter"}</title>
      <defs>
        <path
          d="M4.72 8.32h2.576a.88.88 0 01.102 1.754l-.102.006H4.72a.88.88 0 01-.103-1.754l.103-.006h2.576H4.72zm4.52-3.2a.88.88 0 110 1.76H2.8a.88.88 0 110-1.76h6.44zM.88 1.92h10.24a.88.88 0 01.103 1.754l-.103.006H.88a.88.88 0 01-.103-1.754L.88 1.92h10.24H.88z"
          id="prefix__a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g transform="translate(2 2)">
          <path d="M0 0h12v12H0z" />
          <use fill={props?.color || "#031B4A"} xlinkHref="#prefix__a" />
        </g>
      </g>
    </svg>
  );
}

const ForwardRef = React.forwardRef(SvgComponent);
export default ForwardRef;
