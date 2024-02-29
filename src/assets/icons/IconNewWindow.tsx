import React from 'react';

interface Props {
  className?: string;
}

const IconNewWindow: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1896 3.84375C14.1896 4.31133 14.5658 4.6875 15.0335 4.6875H18.6237L10.7788 12.5273C10.4482 12.8578 10.4482 13.3922 10.7788 13.7191C11.1093 14.0461 11.6438 14.0496 11.9708 13.7191L19.8122 5.8793V9.46875C19.8122 9.93633 20.1884 10.3125 20.6561 10.3125C21.1238 10.3125 21.5 9.93633 21.5 9.46875V3.84375C21.5 3.37617 21.1238 3 20.6561 3H15.0335C14.5658 3 14.1896 3.37617 14.1896 3.84375ZM6.03174 4.125C4.63225 4.125 3.5 5.25703 3.5 6.65625V18.4688C3.5 19.868 4.63225 21 6.03174 21H17.8466C19.246 21 20.3783 19.868 20.3783 18.4688V13.9688C20.3783 13.5012 20.0021 13.125 19.5344 13.125C19.0667 13.125 18.6905 13.5012 18.6905 13.9688V18.4688C18.6905 18.9363 18.3142 19.3125 17.8466 19.3125H6.03174C5.56407 19.3125 5.18783 18.9363 5.18783 18.4688V6.65625C5.18783 6.18867 5.56407 5.8125 6.03174 5.8125H10.5326C11.0003 5.8125 11.3765 5.43633 11.3765 4.96875C11.3765 4.50117 11.0003 4.125 10.5326 4.125H6.03174Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconNewWindow;
