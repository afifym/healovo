import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #343949;
  article {
    margin-top: 4em;
    margin-bottom: 2em;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
      <div>
        <picture>
          <svg
            width='222'
            height='44'
            viewBox='0 0 222 44'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0)'>
              <path
                d='M77.2051 16.9712C78.889 18.6204 79.7302 21.0568 79.7288 24.2802V36.9264H73.3245V25.265C73.3245 23.5133 72.9414 22.206 72.1752 21.3432C71.409 20.4803 70.3002 20.0474 68.8486 20.0446C67.234 20.0446 65.9477 20.5438 64.9896 21.5423C64.0315 22.5408 63.5525 24.0277 63.5525 26.003V36.9264H57.146V6.45898H63.5525V17.1357C64.4264 16.2716 65.4771 15.607 66.6323 15.1878C67.8916 14.7261 69.2238 14.4952 70.5649 14.506C73.3064 14.506 75.5198 15.3277 77.2051 16.9712Z'
                fill='#343949'
              />
              <path
                d='M107.281 27.6868H90.57C90.8357 29.0038 91.6003 30.1671 92.704 30.9333C93.8266 31.7269 95.2226 32.1237 96.892 32.1237C97.935 32.1423 98.9725 31.9684 99.9524 31.6108C100.881 31.2426 101.726 30.6913 102.437 29.9897L105.844 33.682C103.763 36.0642 100.724 37.2554 96.7275 37.2554C94.2385 37.2554 92.0352 36.7691 90.1176 35.7966C88.2841 34.8993 86.7454 33.4965 85.6829 31.7536C84.6286 29.9788 84.0883 27.9458 84.1224 25.8817C84.095 23.8299 84.6278 21.8095 85.6634 20.038C86.6689 18.315 88.133 16.9048 89.8925 15.9647C91.7282 15.0168 93.7623 14.517 95.8283 14.506C97.8943 14.4951 99.9335 14.9735 101.779 15.902C103.51 16.8141 104.942 18.2038 105.906 19.906C106.905 21.6461 107.404 23.6662 107.404 25.9661C107.404 26.0469 107.363 26.6205 107.281 27.6868ZM92.2949 20.5834C91.308 21.4059 90.7056 22.5285 90.4877 23.9511H101.368C101.202 22.6514 100.561 21.4593 99.5671 20.6051C98.5551 19.7612 97.2699 19.3156 95.9527 19.3519C94.4997 19.3519 93.2804 19.7624 92.2949 20.5834Z'
                fill='#343949'
              />
              <path
                d='M127.853 16.9494C129.687 18.5799 130.604 21.0372 130.604 24.3212V36.9263H124.609V34.1754C123.405 36.2272 121.161 37.2539 117.875 37.2553C116.178 37.2553 114.707 36.9667 113.46 36.3896C112.3 35.8871 111.309 35.0605 110.607 34.0088C109.946 32.9812 109.603 31.7808 109.623 30.5588C109.623 28.507 110.395 26.8924 111.941 25.715C113.486 24.5376 115.875 23.9489 119.107 23.9489H124.2C124.2 22.5536 123.775 21.4794 122.925 20.7262C122.075 19.973 120.802 19.5964 119.107 19.5964C117.93 19.597 116.762 19.784 115.644 20.1505C114.597 20.4739 113.616 20.9819 112.748 21.6504L110.443 17.1767C111.762 16.2751 113.226 15.608 114.772 15.205C116.463 14.7379 118.211 14.5027 119.966 14.5059C123.393 14.5059 126.022 15.3204 127.853 16.9494ZM122.392 32.1842C123.241 31.6765 123.882 30.8832 124.2 29.9463V27.6867H119.806C117.177 27.6867 115.862 28.5525 115.862 30.284C115.851 30.663 115.933 31.0391 116.101 31.3789C116.269 31.7186 116.519 32.0116 116.828 32.2319C117.471 32.7109 118.354 32.9504 119.477 32.9504C120.501 32.9672 121.509 32.7022 122.392 32.1842Z'
                fill='#343949'
              />
              <path
                d='M136.393 6.45898H142.798V36.9264H136.393V6.45898Z'
                fill='#343949'
              />
              <path
                d='M153.003 35.7966C151.213 34.8765 149.714 33.4767 148.674 31.7536C147.62 29.9788 147.079 27.9458 147.113 25.8818C147.079 23.8176 147.619 21.7846 148.674 20.0099C149.713 18.2857 151.212 16.885 153.003 15.9647C154.947 15.005 157.086 14.5059 159.254 14.5059C161.423 14.5059 163.562 15.005 165.506 15.9647C167.289 16.8894 168.781 18.2894 169.817 20.0099C170.871 21.785 171.411 23.8178 171.378 25.8818C171.411 27.9457 170.871 29.9784 169.817 31.7536C168.78 33.473 167.288 34.8722 165.506 35.7966C163.562 36.7563 161.423 37.2555 159.254 37.2555C157.086 37.2555 154.947 36.7563 153.003 35.7966ZM163.309 30.336C164.361 29.2278 164.888 27.7431 164.889 25.8818C164.891 24.0204 164.364 22.535 163.309 21.4254C162.254 20.3172 160.906 19.7632 159.264 19.7632C157.622 19.7632 156.264 20.3172 155.191 21.4254C154.123 22.5335 153.589 24.019 153.589 25.8818C153.589 27.7445 154.123 29.2293 155.191 30.336C156.258 31.4441 157.613 31.9982 159.255 31.9982C160.897 31.9982 162.249 31.4441 163.309 30.336Z'
                fill='#343949'
              />
              <path
                d='M196.963 14.835L187.636 36.9264H181.026L171.746 14.835H178.349L184.468 29.8642L190.798 14.835H196.963Z'
                fill='#343949'
              />
              <path
                d='M203.22 35.7966C201.429 34.8777 199.93 33.4776 198.891 31.7536C197.837 29.9788 197.296 27.9458 197.33 25.8818C197.296 23.8176 197.836 21.7846 198.891 20.0099C199.929 18.2851 201.429 16.8842 203.22 15.9647C205.164 15.005 207.303 14.5059 209.471 14.5059C211.64 14.5059 213.779 15.005 215.723 15.9647C217.506 16.8894 218.998 18.2894 220.034 20.0099C221.088 21.785 221.628 23.8178 221.595 25.8818C221.628 27.9457 221.088 29.9784 220.034 31.7536C218.998 33.473 217.505 34.8722 215.723 35.7966C213.779 36.7563 211.64 37.2555 209.471 37.2555C207.303 37.2555 205.164 36.7563 203.22 35.7966ZM213.526 30.336C214.581 29.2278 215.108 27.7431 215.106 25.8818C215.105 24.0204 214.578 22.535 213.526 21.4254C212.471 20.3172 211.123 19.7632 209.481 19.7632C207.839 19.7632 206.484 20.3172 205.416 21.4254C204.35 22.5335 203.816 24.019 203.815 25.8818C203.813 27.7445 204.347 29.2293 205.416 30.336C206.484 31.4441 207.839 31.9982 209.481 31.9982C211.123 31.9982 212.471 31.4441 213.526 30.336Z'
                fill='#343949'
              />
            </g>
            <path
              d='M44.9321 10.4885C43.3435 8.90363 41.1911 8.01358 38.9471 8.01358C36.7031 8.01358 34.5507 8.90363 32.9621 10.4885L23.4812 19.9694L14.0002 10.4885C13.5812 10.0562 13.3489 9.47643 13.3536 8.87436C13.3583 8.2723 13.5996 7.69623 14.0253 7.27049C14.451 6.84476 15.0271 6.60351 15.6292 6.59882C16.2312 6.59413 16.811 6.82637 17.2433 7.24543L23.9612 13.9618L28.3255 9.5976C28.3255 9.5976 34.4309 2.59225 38.4279 4.43727C38.4279 4.43727 33.1758 -1.93752 27.3879 2.13325L23.9733 5.24239L21.6121 2.87969C20.8259 2.09333 19.8926 1.46952 18.8653 1.04387C17.8381 0.618217 16.737 0.399066 15.6251 0.398926C13.3794 0.398644 11.2256 1.29046 9.63752 2.87818C8.04939 4.46591 7.15704 6.61948 7.15675 8.86515C7.15647 11.1108 8.04829 13.2646 9.63601 14.8527L23.4812 28.6979L37.3263 14.8527C37.7601 14.4401 38.338 14.2133 38.9367 14.2208C39.5354 14.2283 40.1074 14.4695 40.5308 14.8928C40.9541 15.3162 41.1953 15.8882 41.2028 16.4869C41.2103 17.0856 40.9835 17.6635 40.5709 18.0973L23.8258 34.8394L7.07767 18.0958L7.01446 18.0507C7.01446 18.0507 3.11675 14.77 3.29132 9.7526C3.29132 9.7526 -2.32951 14.5186 1.12877 20.7174L2.66528 22.4059L2.71946 22.4585L19.4631 39.2021L19.4284 39.2368L23.7927 43.601L23.8273 43.5664L23.8619 43.601L28.2261 39.2368L28.1915 39.2021L44.9321 22.4585C46.5166 20.8697 47.4064 18.7174 47.4064 16.4735C47.4064 14.2296 46.5166 12.0773 44.9321 10.4885Z'
              fill='#2D50EF'
            />
            <defs>
              <clipPath id='clip0'>
                <rect
                  width='164.449'
                  height='30.7964'
                  fill='white'
                  transform='translate(57.146 6.45898)'
                />
              </clipPath>
            </defs>
          </svg>
        </picture>
        <article>
          <h2>Sorry!</h2>
          <h2>That page cannot be found</h2>
        </article>

        <Link style={{ color: '#2D50EF' }} to='/'>
          {'<< '}Back to the Homepage...
        </Link>
      </div>
    </Wrapper>
  );
};

export default NotFound;
