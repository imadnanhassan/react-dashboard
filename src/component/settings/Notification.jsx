import ProtoTypes from "prop-types";
import { useState } from "react";
import NotificationItem from "./NotificationItem";
import ico from "../../assets/images/icons/follower.svg";

function Notification({ name, activeTab }) {
  const [activeNotification, setActiveNotification] = useState({
    ["All Notifcation update off"]: false,
    ["When you upload products"]: false,
    ["You got sell your products"]: true,
    ["Got new follower"]: true,
    ["Author level up"]: false,
  });

  const handleNotification = (name) => {
    setActiveNotification({
      ...activeNotification,
      [name]: !activeNotification[name],
    });
  };

  return (
    <div id="tab2" className={`tab-pane ${name === activeTab && "active"}`}>
      <h3 className="text-2xl font-bold text-bgray-900 dark:text-white mb-5">
        Notification
      </h3>
      <div className="space-y-5">
        <NotificationItem
          name="All Notifcation update off"
          desc="Unlockable content, only revealed by the owner of the item."
          activeNotification={activeNotification}
          handleNotification={handleNotification}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#22C55E" />
            <path
              d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
              fill="white"
            />
            <path
              d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
              fill="white"
            />
          </svg>
        </NotificationItem>
        <NotificationItem
          name="When you upload products"
          desc="Every new products upload successfully done you can get notification"
          activeNotification={activeNotification}
          handleNotification={handleNotification}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#FFC837" />
            <path
              d="M29.9407 27.7853C29.3978 27.6062 28.8874 27.5042 28.4342 27.2802C24.4201 25.2948 20.4135 23.2895 16.4044 21.2942C16.1106 21.1474 15.884 20.9583 15.879 20.6075C15.874 20.2418 16.1006 20.0378 16.4094 19.8835C20.3911 17.9006 24.3728 15.9127 28.352 13.9248C29.4974 13.3526 30.6255 13.4173 31.756 13.987C34.3133 15.2733 36.8806 16.5471 39.443 17.826C40.7503 18.4778 42.0551 19.1321 43.3599 19.7865C43.4346 19.8238 43.5093 19.8586 43.5865 19.896C43.8853 20.0353 44.092 20.2517 44.092 20.5976C44.092 20.9484 43.8704 21.1449 43.5766 21.2892C41.7214 22.2123 39.8688 23.1403 38.0136 24.0633C35.8721 25.1306 33.7406 26.2129 31.5866 27.2529C31.0737 27.5017 30.4935 27.6111 29.9407 27.7853Z"
              fill="white"
            />
            <path
              d="M28.9083 38.2601C28.9083 40.4844 28.9108 42.7086 28.9058 44.9329C28.9033 45.724 28.4576 46.0027 27.728 45.6668C24.0775 43.9874 20.4245 42.313 16.7814 40.6212C15.6086 40.0763 15.0109 39.1235 15.006 37.8347C14.996 33.5952 15.001 29.3557 15.0035 25.1162C15.0035 24.2976 15.4641 23.9941 16.1962 24.3325C19.9713 26.0716 23.7438 27.8206 27.5213 29.5522C28.48 29.9926 28.9232 30.7091 28.9158 31.7566C28.9008 33.9261 28.9108 36.0931 28.9108 38.2626C28.9108 38.2601 28.9108 38.2601 28.9083 38.2601Z"
              fill="white"
            />
            <path
              d="M31.0591 38.198C31.0591 36.016 31.0641 33.8341 31.0567 31.6521C31.0542 30.6669 31.5049 29.9877 32.3889 29.5797C36.1888 27.8281 39.9912 26.0816 43.7911 24.3325C44.4834 24.0141 44.959 24.3002 44.959 25.054C44.964 29.3358 44.9714 33.6151 44.954 37.8969C44.949 39.2081 44.2767 40.1237 43.0939 40.671C40.1406 42.0344 37.1848 43.3954 34.2316 44.7563C33.5991 45.0474 32.9691 45.3385 32.3391 45.6295C31.4825 46.0226 31.0567 45.7564 31.0567 44.8259C31.0567 42.6166 31.0567 40.4048 31.0567 38.1955C31.0591 38.198 31.0591 38.198 31.0591 38.198Z"
              fill="white"
            />
          </svg>
        </NotificationItem>
        <NotificationItem
          name="You got sell your products"
          desc="Every new products sell you can get notification"
          activeNotification={activeNotification}
          handleNotification={handleNotification}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#2DD4BF" />
            <path
              d="M41.8283 27.5958C41.4072 29.0508 41.0641 30.4376 40.5806 31.7718C40.4617 32.101 39.8846 32.4672 39.5142 32.4711C35.1806 32.5217 30.8469 32.5042 26.5133 32.5061C25.8719 32.5061 25.4625 32.1906 25.3163 31.577C24.6301 28.7099 23.9381 25.8428 23.283 22.9698C23.0842 22.1011 23.4799 21.5654 24.3182 21.5596C27.8506 21.5362 31.383 21.5499 35.0032 21.5499C34.9603 23.4236 35.4711 25.0617 36.8922 26.3102C38.2822 27.5393 39.9256 27.9055 41.8283 27.5958Z"
              fill="white"
            />
            <path
              d="M24.4176 33.5096C27.334 33.5096 30.1997 33.5096 33.0654 33.5096C34.9408 33.5096 36.8162 33.5057 38.6915 33.5116C39.5649 33.5135 40.0601 33.905 40.0835 34.5809C40.1069 35.2918 39.5961 35.7242 38.6877 35.7242C33.7224 35.7281 28.759 35.7281 23.7938 35.7242C22.7878 35.7242 22.5091 35.4788 22.2888 34.464C21.3452 30.1049 20.3939 25.7477 19.4679 21.3847C19.3587 20.8724 19.1579 20.5841 18.6296 20.4225C17.419 20.0524 16.2318 19.6044 15.0368 19.1837C14.0328 18.8292 13.6605 18.2877 13.9334 17.5924C14.2024 16.9048 14.7853 16.7295 15.7386 17.0606C17.2221 17.5748 18.692 18.128 20.1912 18.5955C20.9476 18.8311 21.3082 19.2577 21.4681 20.0212C22.3824 24.3589 23.3317 28.6889 24.2733 33.0207C24.3006 33.1493 24.3474 33.2778 24.4176 33.5096Z"
              fill="white"
            />
            <path
              d="M35.6934 22.2151C35.6798 19.5116 37.8729 17.3145 40.5788 17.3243C43.23 17.332 45.4134 19.533 45.4095 22.1957C45.4056 24.8505 43.2144 27.0456 40.5573 27.0515C37.9022 27.0573 35.7071 24.8758 35.6934 22.2151ZM42.6257 20.057C41.7465 20.9978 40.8848 21.921 39.8614 23.0176C39.3721 22.3534 38.9763 21.8197 38.524 21.2081C38.0698 21.6834 37.7696 21.997 37.5747 22.2034C38.4051 23.0605 39.1986 23.8766 39.9316 24.6343C41.1207 23.4422 42.345 22.2171 43.6726 20.8867C43.4562 20.7153 43.1969 20.5089 42.9357 20.3024C42.8538 20.2342 42.77 20.1719 42.6257 20.057Z"
              fill="white"
            />
            <path
              d="M37.4854 36.6242C39.2068 36.6086 40.6104 37.9603 40.6436 39.6666C40.6767 41.4021 39.2653 42.8259 37.5147 42.8259C35.805 42.8259 34.4072 41.4371 34.3994 39.7367C34.3936 38.0285 35.7699 36.6417 37.4854 36.6242ZM38.8929 39.7153C38.891 38.9615 38.2984 38.3499 37.5537 38.3343C36.7817 38.3168 36.1384 38.9537 36.1423 39.7309C36.1462 40.4769 36.7485 41.0963 37.4854 41.1157C38.2574 41.1352 38.8968 40.5002 38.8929 39.7153Z"
              fill="white"
            />
            <path
              d="M24.8751 42.825C23.1556 42.8113 21.7754 41.4304 21.7793 39.7261C21.7852 37.9672 23.179 36.6018 24.9491 36.6213C26.6569 36.6408 28.0273 38.0471 28.0078 39.7592C27.9864 41.4713 26.5906 42.8367 24.8751 42.825ZM26.2709 39.728C26.2728 38.945 25.6334 38.3159 24.8556 38.3353C24.1226 38.3548 23.4968 38.9879 23.4968 39.7163C23.4948 40.4467 24.1148 41.0876 24.8439 41.1129C25.6178 41.1401 26.2689 40.5071 26.2709 39.728Z"
              fill="white"
            />
          </svg>
        </NotificationItem>
        <NotificationItem
          name="Got new follower"
          desc="Every new follower you can get notification"
          activeNotification={activeNotification}
          handleNotification={handleNotification}
        >
          <img src={ico} alt="" />
        </NotificationItem>
        <NotificationItem
          name="Author level up"
          desc="Every new products sell you can get notification"
          activeNotification={activeNotification}
          handleNotification={handleNotification}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill="#936DFF" />
            <path
              d="M37.9128 13.2706C38.2013 13.4189 38.2864 13.6656 38.2814 13.9739C38.2714 14.5905 38.2781 15.2088 38.2781 15.8655C38.4182 15.8655 38.5299 15.8655 38.6417 15.8655C40.1145 15.8671 41.5857 15.8671 43.0586 15.8688C43.9126 15.8705 44.2879 16.2605 44.2696 17.1121C44.2229 19.197 44.0077 21.2602 43.4005 23.2651C42.9368 24.8 42.283 26.2332 41.0787 27.3482C40.3331 28.0381 39.4523 28.4581 38.4415 28.5831C38.2514 28.6064 38.1863 28.6747 38.1463 28.8631C37.4691 32.0529 35.5742 34.1344 32.4467 35.0877C32.3116 35.1294 32.2032 35.161 32.2032 35.3494C32.2099 37.3242 32.2099 39.2991 32.2115 41.274C32.2115 41.304 32.2249 41.334 32.2399 41.394C32.345 41.399 32.4567 41.409 32.5685 41.409C33.2307 41.4107 33.8929 41.414 34.5551 41.4073C34.842 41.404 35.0538 41.5057 35.2206 41.7473C35.8878 42.7156 36.565 43.6789 37.2389 44.6422C37.3773 44.8405 37.5125 45.0721 37.3306 45.2721C37.2005 45.4138 36.9637 45.5304 36.7735 45.5321C32.4 45.5471 28.0248 45.5421 23.6513 45.5454C23.4178 45.5454 23.2109 45.5054 23.0858 45.2821C22.9524 45.0421 23.0491 44.8422 23.1892 44.6422C23.8581 43.6872 24.5287 42.7339 25.1875 41.7723C25.3677 41.5107 25.5945 41.404 25.9031 41.4073C26.6587 41.4157 27.4143 41.409 28.2033 41.409C28.21 41.274 28.22 41.1624 28.22 41.0507C28.2216 39.1908 28.2166 37.3326 28.225 35.4727C28.2266 35.2377 28.1633 35.1394 27.9214 35.0644C24.8823 34.1178 22.9974 32.0945 22.3119 28.9831C22.2502 28.7031 22.1551 28.6081 21.8598 28.5614C20.407 28.3364 19.3128 27.5315 18.4738 26.3532C17.5047 24.9916 16.9993 23.44 16.659 21.8285C16.3287 20.2636 16.1769 18.6753 16.1536 17.0754C16.1419 16.2388 16.5255 15.8655 17.3679 15.8638C18.8291 15.8621 20.2919 15.8605 21.7531 15.8605C21.8682 15.8605 21.9833 15.8605 22.1484 15.8605C22.1484 15.5655 22.1484 15.2872 22.1484 15.0089C22.1484 14.6622 22.1567 14.3156 22.1467 13.9689C22.1367 13.6606 22.2268 13.4123 22.5154 13.2656C27.6478 13.2706 32.7803 13.2706 37.9128 13.2706ZM30.2132 18.5787C29.8947 19.222 29.561 19.7753 29.3425 20.3719C29.109 21.0102 28.7154 21.2668 28.0482 21.2935C27.4177 21.3202 26.7922 21.4652 26.1116 21.5652C26.2217 21.6818 26.2901 21.7568 26.3635 21.8285C26.8972 22.3501 27.4393 22.8634 27.9581 23.3984C28.0548 23.4984 28.1165 23.69 28.1015 23.8284C28.0565 24.245 27.9631 24.655 27.8914 25.0683C27.8196 25.4933 27.7513 25.9199 27.6729 26.3999C28.4652 25.9832 29.2041 25.6083 29.9297 25.2083C30.1415 25.0916 30.3 25.1033 30.5051 25.2149C31.2307 25.6116 31.968 25.9882 32.7236 26.3832C32.7236 26.2899 32.7319 26.2282 32.7219 26.1716C32.5902 25.4066 32.4667 24.64 32.3183 23.8784C32.2749 23.6534 32.3233 23.5084 32.4884 23.355C32.9338 22.9401 33.3624 22.5051 33.8011 22.0818C33.9629 21.9251 34.1331 21.7768 34.3649 21.5668C33.4609 21.4368 32.6652 21.3135 31.8662 21.2102C31.6077 21.1768 31.4409 21.0968 31.3225 20.8335C30.9872 20.0969 30.6086 19.3736 30.2132 18.5787ZM42.2813 17.892C40.9219 17.892 39.6075 17.892 38.3014 17.892C38.3014 20.8019 38.3014 23.6834 38.3014 26.6449C38.6517 26.4965 38.9753 26.3999 39.2555 26.2315C40.1512 25.6932 40.6617 24.84 41.057 23.91C41.5991 22.6368 41.8943 21.2968 42.0745 19.9319C42.1612 19.2569 42.2112 18.5803 42.2813 17.892ZM22.1301 26.5865C22.1301 23.6717 22.1301 20.7819 22.1301 17.8854C20.8023 17.8854 19.4963 17.8854 18.1819 17.8854C18.1785 17.947 18.1719 17.987 18.1735 18.027C18.2753 19.6969 18.4988 21.3468 19.0142 22.9434C19.3278 23.9133 19.7198 24.855 20.4287 25.6199C20.8874 26.1166 21.4262 26.4749 22.1301 26.5865Z"
              fill="white"
            />
          </svg>
        </NotificationItem>
      </div>
    </div>
  );
}
Notification.propTypes = {
  name: ProtoTypes.string,
  activeTab: ProtoTypes.string,
};
export default Notification;
