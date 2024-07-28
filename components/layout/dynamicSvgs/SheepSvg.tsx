import { cn } from "@/lib/utils";

interface SheepSvgProps {
  className?: string;
}

export default function SheepSvg({ className }: SheepSvgProps) {
  return (
    <svg
      className={cn(
        "flex flex-col items-center justify-center mx-auto",
        className
      )}
      height="800px"
      width="800px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          className="fill-current"
          d="M487.759,193.282c-7.398-12.08-17.223-22.472-28.794-30.571c1.038-5.898,1.62-11.856,1.62-17.821
		c0-13.124-2.5-26.256-7.51-38.626c-5.009-12.371-12.557-23.979-22.546-33.976c-9.996-9.997-21.605-17.537-33.975-22.546
		c-12.37-5.016-25.503-7.518-38.627-7.518c-5.965,0-11.93,0.582-17.827,1.62c-8.1-11.563-18.485-21.396-30.564-28.794
		C293.962,5.51,275.56-0.008,256,0c-19.56-0.008-37.962,5.51-53.535,15.05c-12.079,7.399-22.464,17.231-30.564,28.794
		c-5.897-1.037-11.862-1.62-17.828-1.62c-13.124,0-26.256,2.494-38.626,7.511c-12.37,5.016-23.986,12.556-33.976,22.56
		c-9.996,9.989-17.536,21.598-22.546,33.968c-5.016,12.37-7.518,25.502-7.518,38.618c0,5.965,0.59,11.93,1.62,17.828
		c-11.564,8.1-21.396,18.492-28.794,30.571c-9.54,15.573-15.058,33.975-15.05,53.535c-0.008,19.56,5.51,37.962,15.05,53.528
		c7.398,12.08,17.23,22.471,28.794,30.571c-1.037,5.898-1.62,11.863-1.62,17.835c0,13.124,2.502,26.249,7.518,38.619
		c5.01,12.37,12.55,23.979,22.546,33.968c9.99,9.996,21.606,17.545,33.968,22.554c5.756,2.329,11.684,4.099,17.693,5.345v33.804
		c0,15.991,12.968,28.959,28.959,28.959c15.999,0,28.967-12.968,28.967-28.959v-12.579c3.606,2.949,7.413,5.674,11.407,8.122
		c15.573,9.541,33.975,15.051,53.535,15.051c19.56,0,37.962-5.51,53.535-15.051c3.994-2.449,7.802-5.166,11.408-8.122v12.579
		c0,15.991,12.968,28.959,28.959,28.959c15.999,0,28.966-12.968,28.966-28.959V449.23c6.01-1.239,11.93-3.009,17.686-5.346
		c12.37-5.001,23.979-12.55,33.975-22.538c9.989-9.996,17.536-21.606,22.546-33.976c5.018-12.378,7.518-25.502,7.518-38.619
		c0-5.98-0.589-11.937-1.62-17.835c11.564-8.1,21.396-18.492,28.787-30.571c9.548-15.566,15.058-33.968,15.058-53.528
		C502.825,227.258,497.308,208.855,487.759,193.282z M460.816,283.854c-6.6,10.788-16.029,19.701-27.219,25.681
		c-6.645,3.554-9.847,11.303-7.668,18.515c2.046,6.727,3.068,13.707,3.068,20.702c0,9.108-1.739,18.208-5.204,26.749
		c-3.464,8.548-8.637,16.528-15.611,23.502c-6.965,6.965-14.953,12.138-23.494,15.603c-8.548,3.464-17.648,5.203-26.756,5.203
		c-6.988,0-13.968-1.023-20.702-3.061c-7.212-2.187-14.954,1.023-18.507,7.668c-5.98,11.184-14.901,20.619-25.689,27.219
		c-10.795,6.608-23.404,10.4-37.036,10.407c-13.632-0.007-26.234-3.799-37.036-10.407c-10.788-6.6-19.702-16.035-25.682-27.219
		c-3.561-6.645-11.303-9.855-18.515-7.668c-6.733,2.038-13.721,3.068-20.702,3.061c-9.108,0.008-18.208-1.732-26.756-5.196
		c-8.541-3.472-16.529-8.645-23.494-15.61c-6.973-6.974-12.147-14.962-15.61-23.502c-3.464-8.541-5.204-17.641-5.204-26.749
		c0-6.987,1.023-13.968,3.069-20.702c2.18-7.212-1.031-14.96-7.667-18.515c-11.191-5.98-20.62-14.893-27.228-25.681
		c-6.599-10.802-10.391-23.412-10.399-37.037c0.008-13.632,3.8-26.241,10.399-37.036c6.607-10.795,16.036-19.708,27.228-25.688
		c6.636-3.554,9.847-11.303,7.667-18.507c-2.046-6.734-3.069-13.722-3.069-20.703c0-9.108,1.74-18.208,5.204-26.749
		c3.464-8.547,8.638-16.536,15.61-23.501c6.973-6.973,14.953-12.154,23.501-15.618c8.541-3.464,17.641-5.196,26.756-5.196
		c6.98,0,13.968,1.023,20.694,3.061c7.212,2.188,14.962-1.023,18.515-7.667c5.98-11.184,14.894-20.612,25.682-27.219
		c10.803-6.6,23.404-10.4,37.036-10.4c13.632,0,26.241,3.8,37.036,10.4c10.788,6.606,19.71,16.035,25.682,27.219
		c3.554,6.652,11.303,9.855,18.515,7.667c6.726-2.038,13.714-3.061,20.694-3.061c9.116,0,18.216,1.74,26.756,5.204
		c8.548,3.464,16.529,8.638,23.501,15.61c6.966,6.965,12.147,14.954,15.611,23.494c3.457,8.548,5.196,17.649,5.196,26.764
		c0,6.973-1.023,13.961-3.061,20.695c-2.187,7.211,1.023,14.953,7.668,18.507c11.19,5.98,20.619,14.901,27.226,25.688
		c6.6,10.803,10.392,23.404,10.399,37.036C471.216,260.442,467.424,273.052,460.816,283.854z"
        />
        <path
          className="fill-current"
          d="M352.156,177.709c-40.986,15.797-44.136,15.797-44.136,15.797s-11.034,0-52.02,0c-40.986,0-52.02,0-52.02,0
		s-3.15,0-44.136-15.797c-40.985-15.797-44.136,55.29,28.376,75.028c0,0,11.034,118.478,67.78,118.478
		c56.746,0,67.779-118.478,67.779-118.478C396.292,232.999,393.142,161.912,352.156,177.709z"
        />
      </g>
    </svg>
  );
}