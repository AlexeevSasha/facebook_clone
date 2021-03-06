import { FC } from 'react';

export const ArrowDown: FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16">
      <path
        fillRule="nonzero"
        d="M452.707 549.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L456 552.586l-3.293-3.293z"
        transform="translate(-448 -544)"
      />
    </svg>
  );
};

export const ArrowDownColor: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
      <path d="M10 14a1 1 0 01-.755-.349L5.329 9.182a1.367 1.367 0 01-.205-1.46A1.184 1.184 0 016.2 7h7.6a1.18 1.18 0 011.074.721 1.357 1.357 0 01-.2 1.457l-3.918 4.473A1 1 0 0110 14z" />
    </svg>
  );
};

export const ArrowRight: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="20" fill={color} viewBox="0 0 20 20">
      <g fillRule="nonzero">
        <path
          d="M456.751 364.501a1 1 0 001.415 1.415l5.208-5.209a1 1 0 000-1.414l-5.208-5.209a1.001 1.001 0 00-1.416 1.416l4.501 4.501-4.5 4.501z"
          transform="translate(-446 -350)"
        />
        <path
          d="M449.334 361h12.812a1 1 0 100-2h-12.813a1 1 0 100 2z"
          transform="translate(-446 -350)"
        />
      </g>
    </svg>
  );
};

export const Dots: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="20" fill={color} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M458 360a2 2 0 11-4 0 2 2 0 014 0m6 0a2 2 0 11-4 0 2 2 0 014 0m-12 0a2 2 0 11-4 0 2 2 0 014 0"
        transform="translate(-446 -350)"
      />
    </svg>
  );
};

export const Feeling: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="25" height="25" fill={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path
          d="M460.785 169.5c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z"
          transform="translate(-444 -156)"
        />
        <path
          fillRule="nonzero"
          d="M467.524 168c0 6.351-5.149 11.5-11.5 11.5s-11.5-5.149-11.5-11.5 5.149-11.5 11.5-11.5 11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 10-19 0 9.5 9.5 0 0019 0z"
          transform="translate(-444 -156)"
        />
        <path
          d="M453.024 165c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5h-9.522c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 01-2.596-1h5.192"
          transform="translate(-444 -156)"
        />
      </g>
    </svg>
  );
};

export const Friends: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25a4.755 4.755 0 00-4.75 4.749v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z" />
    </svg>
  );
};

export const FriendsActive: FC = () => {
  return (
    <svg fill="#1b74e4" width="28" height="28" viewBox="0 0 28 28">
      <path d="M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z" />
    </svg>
  );
};

export const Gaming: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z" />
    </svg>
  );
};

export const Home: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="28" fill={color} viewBox="0 0 28 28">
      <path d="M17.5 23.979h3.75c.136 0 .25-.115.25-.25v-9.75c0-.552.449-1 1-1h1.83L14.017 4.046 3.672 12.979H5.5a1 1 0 011 1v9.75c0 .135.115.25.25.25h3.75v-6.25c0-.689.561-1.25 1.25-1.25h4.5c.689 0 1.25.561 1.25 1.25v6.25zm3.75 1.5H17a1 1 0 01-1-1v-6.152a.348.348 0 00-.348-.348h-3.304a.348.348 0 00-.348.348v6.152a1 1 0 01-1 1H6.75A1.75 1.75 0 015 23.729v-9.25H3.069c-.502 0-.99-.264-1.201-.72a1.243 1.243 0 01.307-1.469l10.826-9.378c.247-.237.607-.385.988-.391.403.006.764.154 1.038.416l10.794 9.349.004.004c.419.368.546.955.308 1.469-.212.456-.699.72-1.202.72H23v9.25a1.75 1.75 0 01-1.75 1.75z" />
    </svg>
  );
};

export const HomeActive: FC = () => {
  return (
    <svg fill="#1b74e4" width="28" height="28" viewBox="0 0 28 28">
      <path d="M25.825 12.29l-.004-.004-10.794-9.349a1.514 1.514 0 00-1.038-.416 1.473 1.473 0 00-.988.391L2.175 12.29a1.24 1.24 0 00-.307 1.469c.211.456.699.72 1.201.72H5v9.25c0 .966.784 1.75 1.75 1.75H11a1 1 0 001-1v-6.17a.33.33 0 01.33-.33h3.34a.33.33 0 01.33.33v6.17a1 1 0 001 1h4.25a1.75 1.75 0 001.75-1.75v-9.25h1.931c.502 0 .99-.264 1.201-.72a1.24 1.24 0 00-.307-1.469" />
    </svg>
  );
};

export const LiveVideo: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="25" height="25" fill={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path
          d="M467.029 161.014c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 00-.411.807v8.13a1 1 0 00.41.808l2.602 1.901a1.248 1.248 0 001.469.007c.34-.239.519-.65.519-1.065v-11.481a1.25 1.25 0 00-.971-1.22m-20.15 6.563c.1-.146 2.475-3.578 5.87-3.578 3.396 0 5.771 3.432 5.87 3.578a.749.749 0 010 .844c-.099.146-2.474 3.578-5.87 3.578-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 010-.844zm10.871 9.922a3.754 3.754 0 003.75-3.75v-11.5a3.754 3.754 0 00-3.75-3.75h-10a3.754 3.754 0 00-3.75 3.75v11.5a3.754 3.754 0 003.75 3.75h10z"
          transform="translate(-444 -156)"
        />
        <path
          d="M452.75 170.5c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5a2.503 2.503 0 00-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5"
          transform="translate(-444 -156)"
        />
      </g>
    </svg>
  );
};

export const Logo: FC = () => {
  return (
    <svg width="40" height="40" fill="url(#jsc_s_b)" viewBox="0 0 36 36">
      <defs>
        <linearGradient id="jsc_s_b" x1="50%" x2="50%" y1="97.078%" y2="0%">
          <stop offset="0%" stopColor="#0062E0" />
          <stop offset="100%" stopColor="#19AFFF" />
        </linearGradient>
      </defs>
      <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
      <path
        fill="#fff"
        d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
      />
    </svg>
  );
};

export const Market: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <path d="M17.5 23.75h4.25a.75.75 0 00.75-.75v-9h.031a2.4 2.4 0 01-.47-.306l-.401-.335a.252.252 0 00-.32.001l-.164.137a3.257 3.257 0 01-2.081.753h-.226a3.248 3.248 0 01-2.069-.744l-.184-.152a.25.25 0 00-.318 0l-.185.153a3.257 3.257 0 01-2.069.743h-.137a3.248 3.248 0 01-2.046-.725l-.216-.175a.25.25 0 00-.317.002l-.173.145a3.252 3.252 0 01-2.081.753h-.178a3.25 3.25 0 01-2.064-.739l-.194-.16a.25.25 0 00-.318 0l-.471.388a2.248 2.248 0 01-.397.261H5.5v9c0 .414.336.75.75.75h4.25V17.5c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25v6.25zm-13.827-15h20.654a4.176 4.176 0 00-.089-.267l-1.151-3.128a1.749 1.749 0 00-1.626-1.105H6.54c-.718 0-1.363.438-1.621 1.088L3.762 8.483a4.176 4.176 0 00-.089.267zm20.827 1.5h-21V12c0 .414.336.75.75.75h.171a.75.75 0 00.476-.17l.471-.387a1.749 1.749 0 012.222 0l.194.159c.313.257.706.398 1.112.398h.178c.409 0 .806-.143 1.12-.405l.174-.145a1.749 1.749 0 012.221-.015l.216.174a1.75 1.75 0 001.102.391h.137c.406 0 .8-.142 1.114-.4l.185-.153a1.75 1.75 0 012.228 0l.184.153c.313.258.707.4 1.114.4h.226c.409 0 .806-.144 1.121-.406l.164-.136a1.747 1.747 0 012.24-.001l.402.335a.9.9 0 001.478-.692v-1.6zm-.5 3.967V23a2.25 2.25 0 01-2.25 2.25H6.25A2.25 2.25 0 014 23v-8.764A2.25 2.25 0 012 12V9.951c0-.679.12-1.351.354-1.987l1.164-3.162A3.25 3.25 0 016.54 2.75h14.921c1.332 0 2.529.813 3.027 2.069l1.158 3.145C25.88 8.6 26 9.272 26 9.951v1.899a2.402 2.402 0 01-2 2.367zm-8 9.533v-6h-4v6h4z" />
    </svg>
  );
};

export const Menu: FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 44 44">
      <circle cx="7" cy="7" r="6" />
      <circle cx="22" cy="7" r="6" />
      <circle cx="37" cy="7" r="6" />
      <circle cx="7" cy="22" r="6" />
      <circle cx="22" cy="22" r="6" />
      <circle cx="37" cy="22" r="6" />
      <circle cx="7" cy="37" r="6" />
      <circle cx="22" cy="37" r="6" />
      <circle cx="37" cy="37" r="6" />
    </svg>
  );
};

export const Messenger: FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28">
      <path d="M14 2.042c6.76 0 12 4.952 12 11.64s-5.24 11.64-12 11.64a13.091 13.091 0 01-3.474-.461.956.956 0 00-.641.047L7.5 25.959a.961.961 0 01-1.348-.849l-.065-2.134a.957.957 0 00-.322-.684A11.389 11.389 0 012 13.682c0-6.688 5.24-11.64 12-11.64zM6.794 17.086a.57.57 0 00.827.758l3.786-2.874a.722.722 0 01.868 0l2.8 2.1a1.8 1.8 0 002.6-.481l3.525-5.592a.57.57 0 00-.827-.758l-3.786 2.874a.722.722 0 01-.868 0l-2.8-2.1a1.8 1.8 0 00-2.6.481z" />
    </svg>
  );
};

export const NewRoom: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M457.25 552.5H455v2.25a.75.75 0 01-1.5 0v-2.25h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0V551h2.25a.75.75 0 010 1.5m6.38-4.435a.62.62 0 00-.64.047l-2.49 1.634v-1.394a1.854 1.854 0 00-1.852-1.852l-8.796.002a1.854 1.854 0 00-1.851 1.852v6.793c0 1.021.83 1.852 1.852 1.852l1.147-.002h7.648a1.854 1.854 0 001.852-1.851v-1.392l2.457 1.61a.641.641 0 00.673.071.663.663 0 00.37-.601v-6.167c0-.26-.142-.49-.37-.602"
        transform="translate(-448 -544)"
      />
    </svg>
  );
};

export const Notifications: FC = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28">
      <path d="M7.847 23.488c1.36 0 3.596-.125 6.62-.682a3.72 3.72 0 01-3.487 2.441 3.718 3.718 0 01-3.155-1.759h.022zm17.076-7.758c.247 1.272-.645 2.397-2.653 3.346-1.1.519-3.546 1.507-7.586 2.293-3.116.605-5.399.744-6.836.744-.427 0-.78-.012-1.058-.028-2.216-.127-3.466-.837-3.713-2.109-.375-1.927.218-2.671 1.201-3.903l.259-.325c.663-.841.922-1.667.498-3.846-.949-4.88 1.249-8.215 6.029-9.149 4.782-.923 8.07 1.343 9.019 6.224.423 2.179.973 2.847 1.903 3.378v.001l.362.205c1.372.774 2.2 1.241 2.575 3.169z" />
    </svg>
  );
};

export const Photo: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="25" height="25" fill={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path
          d="M448.968 178.925l-.648.057a2.692 2.692 0 01-1.978-.625 2.69 2.69 0 01-.96-1.84l-1.372-15.697a2.702 2.702 0 01.79-2.156c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 01.507.675 4.189 4.189 0 00-.251 1.11l-1.393 15.916a4.206 4.206 0 00.977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 11-3.485.305 1.75 1.75 0 013.485-.305m5.85 3.011a.797.797 0 00-1.129-.093l-3.733 3.195a.545.545 0 00-.062.765l.837.993a.75.75 0 11-1.147.966l-2.502-2.981a.797.797 0 00-1.096-.12L451 171l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z"
          transform="translate(-444 -156)"
        />
        <path
          fillRule="nonzero"
          d="M463.61 179.463l-11.604-1.015a2.77 2.77 0 01-2.512-2.995l1.386-15.863a2.77 2.77 0 012.996-2.51l11.603 1.015a2.77 2.77 0 012.513 2.994l-1.388 15.862a2.77 2.77 0 01-2.994 2.513zm.13-1.494l.082.004a1.27 1.27 0 001.287-1.154l1.388-15.862a1.27 1.27 0 00-1.148-1.37l-11.604-1.014a1.27 1.27 0 00-1.37 1.15l-1.387 15.86a1.27 1.27 0 001.149 1.37l11.603 1.016z"
          transform="translate(-444 -156)"
        />
      </g>
    </svg>
  );
};

export const Plus: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 20 20">
      <g fillRule="nonzero">
        <path
          d="M449.5 361h13a1 1 0 100-2h-13a1 1 0 100 2z"
          transform="translate(-446 -350)"
        />
        <path
          d="M457 366.5v-13a1 1 0 10-2 0v13a1 1 0 102 0z"
          transform="translate(-446 -350)"
        />
      </g>
    </svg>
  );
};

export const Public: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="1em" height="1em" fill={color} viewBox="0 0 16 16">
      <g fillRule="evenodd">
        <path
          d="M463.5 552c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 01-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 01-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 016.524 7.434"
          transform="translate(-448 -544)"
        />
        <path
          d="M458.107 559.196A7.498 7.498 0 01448.5 552a7.48 7.48 0 013.407-6.283 5.474 5.474 0 00-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 00.193.096"
          transform="translate(-448 -544)"
        />
        <path
          fillRule="nonzero"
          d="M464 552a8 8 0 11-16 0 8 8 0 0116 0zm-1 0a7 7 0 10-14 0 7 7 0 0014 0z"
          transform="translate(-448 -544)"
        />
      </g>
    </svg>
  );
};

export const Return: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={color}>
      <g fillRule="nonzero">
        <path
          d="M455.249 355.499a1 1 0 00-1.415-1.415l-5.208 5.209a1 1 0 000 1.414l5.208 5.209a1.001 1.001 0 001.416-1.416l-4.501-4.501 4.5-4.501z"
          transform="translate(-446 -350)"
        />
        <path
          d="M462.666 359h-12.811a1 1 0 100 2h12.813a1 1 0 100-2z"
          transform="translate(-446 -350)"
        />
      </g>
    </svg>
  );
};

export const Search: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="16" height="16" fill={color} viewBox="0 0 16 16">
      <g fillRule="nonzero">
        <path
          d="M458.743 546.257a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486zm-1.06 1.06a4.5 4.5 0 10-6.365 6.364 4.5 4.5 0 006.364-6.363z"
          transform="translate(-448 -544)"
        />
        <path
          d="M458.39 552.75a2.94 2.94 0 00-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 001.112-1.004l-.051-.057a.39.39 0 01-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 10-1.299-.752z"
          transform="translate(-448 -544)"
        />
        <path
          d="M457.557 555.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 001.06-1.06 1.881 1.881 0 00-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 00.624 1.356l.066-.027.12-.061z"
          transform="translate(-448 -544)"
        />
        <path
          d="M461.463 559.142l-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 01-.24-.182zm.617-.616l.444-.444a.31.31 0 00-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 00.051.063l.205-.204-.233-.209z"
          transform="translate(-448 -544)"
        />
      </g>
    </svg>
  );
};

export const Watch: FC<{ color: string }> = ({ color }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill={color}>
      <path d="M8.75 25.25a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H8.75zm8.413-12.404l-5.108 3.077A.696.696 0 0111 15.327V9.172a.696.696 0 011.055-.596l5.108 3.078a.696.696 0 010 1.192zm4.587 7.404A2.25 2.25 0 0024 18V6.5a2.25 2.25 0 00-2.25-2.25H6.25A2.25 2.25 0 004 6.5V18a2.25 2.25 0 002.25 2.25h15.5zm0 1.5H6.25A3.75 3.75 0 012.5 18V6.5a3.75 3.75 0 013.75-3.75h15.5A3.75 3.75 0 0125.5 6.5V18a3.75 3.75 0 01-3.75 3.75z" />
    </svg>
  );
};
