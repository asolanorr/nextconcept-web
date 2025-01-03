interface Props {
  color: string;
}

export default function EmailIcon({ color }: Props) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.75 3.41671C1.75 2.93048 1.94315 2.46416 2.28697 2.12034C2.63079 1.77653 3.0971 1.58337 3.58333 1.58337H16.4167C16.9029 1.58337 17.3692 1.77653 17.713 2.12034C18.0568 2.46416 18.25 2.93048 18.25 3.41671V12.5834C18.25 13.0696 18.0568 13.5359 17.713 13.8797C17.3692 14.2236 16.9029 14.4167 16.4167 14.4167H3.58333C3.0971 14.4167 2.63079 14.2236 2.28697 13.8797C1.94315 13.5359 1.75 13.0696 1.75 12.5834V3.41671Z"
        stroke={color}
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 3.41675L10 8.91675L18.25 3.41675"
        stroke={color}
        strokeWidth="1.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
