// Define the types for the props
type Props = {
  id: number;
  color: string;
};
//component to show icons in different sections
const Icon: React.FC<Props> = ({ id, color }) => {
  return (
    <span className="h-15 w-15 bg-white rounded-full flex justify-center items-center">
      {id === 1 ? (
        <svg
          className=""
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.97 10.758L30.16 3.514C29.938 2.624 29.138 2 28.22 2H3.782C2.864 2 2.064 2.624 1.84 3.514L0.03 10.758C0.01 10.836 0 10.918 0 11C0 13.756 2.13 16 4.75 16C6.272 16 7.63 15.242 8.5 14.066C9.37 15.242 10.728 16 12.25 16C13.772 16 15.13 15.242 16 14.066C16.87 15.242 18.226 16 19.75 16C21.274 16 22.63 15.242 23.5 14.066C24.37 15.242 25.726 16 27.25 16C29.87 16 32 13.756 32 11C32 10.918 31.99 10.836 31.97 10.758Z"
            fill={color}
          ></path>
          <path
            d="M27.25 18C25.888 18 24.594 17.584 23.5 16.824C21.312 18.346 18.188 18.346 16 16.824C13.812 18.346 10.688 18.346 8.5 16.824C7.406 17.584 6.112 18 4.75 18C3.768 18 2.842 17.77 2 17.378V28C2 29.104 2.896 30 4 30H12V22H20V30H28C29.104 30 30 29.104 30 28V17.378C29.158 17.77 28.232 18 27.25 18Z"
            fill={color}
          ></path>
        </svg>
      ) : id == 2 ? (
        <svg
          className=""
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.3332 0.00012207H18.2497C17.5165 0.00012207 16.4917 0.424885 15.9737 0.942537L0.778178 16.138C-0.259393 17.1744 -0.259393 18.8736 0.778178 19.9087L12.0925 31.2226C13.1277 32.259 14.8253 32.259 15.8621 31.2215L31.0576 16.0284C31.5751 15.5108 32 14.4844 32 13.7528V2.6669C32 1.2005 30.7995 0.00012207 29.3332 0.00012207ZM23.9996 10.6668C22.5268 10.6668 21.3328 9.47161 21.3328 8.00006C21.3328 6.52609 22.5268 5.33329 23.9996 5.33329C25.4724 5.33329 26.6667 6.52609 26.6667 8.00006C26.6668 9.47161 25.4724 10.6668 23.9996 10.6668Z"
            fill={color}
          ></path>
        </svg>
      ) : id == 3 ? (
        <svg
          className=""
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.7346 2.0111C7.34852 1.9963 12.9645 1.9963 18.5785 2.0111C19.872 1.99841 21.2015 2.5987 21.8821 3.72951C22.7107 4.93219 22.7043 6.58931 21.9307 7.81735C19.3964 12.3131 16.767 16.7582 14.2137 21.2434C13.5479 22.3023 13.5606 23.8073 14.4209 24.7521C15.3974 25.9146 17.3314 26.1091 18.496 25.1199C19.1956 24.5027 19.6057 23.6445 20.1003 22.8688C20.8359 21.7126 21.5038 20.5142 22.2732 19.3813C22.3027 17.6037 22.3894 15.8261 22.6283 14.0633C22.7889 12.9113 22.9115 11.7086 23.4949 10.675C23.6259 10.6645 23.8859 10.6433 24.0148 10.6328C25.1795 11.2584 25.6571 12.6112 25.8981 13.8308C27.1663 13.3298 28.7346 13.2136 29.8887 14.0569C31.1633 14.9531 31.6663 16.5341 31.9221 18.001C32.013 18.5485 32.1208 19.2587 31.6304 19.656C30.5059 20.3937 29.1997 20.7911 27.904 21.1102C28.276 23.6086 29.1827 26.0013 30.3114 28.2523C30.4488 28.5504 30.544 28.8653 30.6433 29.1781C30.4066 29.417 30.1825 29.7361 29.7957 29.66C21.1952 29.6685 12.5946 29.6622 3.99412 29.6643C2.97321 29.677 1.90158 29.3789 1.17448 28.6265C-0.1212 27.4914 -0.343136 25.4538 0.500219 23.9869C2.71746 20.1084 4.97909 16.2551 7.21958 12.3892C7.73532 11.4338 8.44128 10.4679 8.36096 9.32652C8.39056 7.81947 7.39502 6.36949 6.00211 5.81359C4.41685 5.15201 2.81892 4.52214 1.23789 3.85211C0.751747 3.66188 0.6672 3.11232 0.662972 2.65577C0.958887 2.3514 1.25269 1.94769 1.7346 2.0111ZM27.2551 17.1534C27.2297 17.4071 27.2234 17.6628 27.2339 17.9186C27.5299 18.1997 27.8786 18.5337 28.3267 18.3561C28.9798 18.2737 29.1362 17.3817 28.7262 16.9442C28.3521 16.4411 27.5193 16.6314 27.2551 17.1534Z"
            fill={color}
          ></path>
        </svg>
      ) : (
        ""
      )}
    </span>
  );
};

export default Icon;