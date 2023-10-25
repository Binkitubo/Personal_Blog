import { BsDashLg, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoEtsy } from 'react-icons/bi';
import Cards from '@/components/cards/page';

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <div className="top-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="flex justify-between">
          <div className="font-semibold ml-44 mt-36">
            <h1 className="text-white text-9xl">Avila Art</h1>
            <h2 className="text-white text-7xl">Welcome to my blog!</h2>
            <p className="text-white text-2xl mt-12">
              Find me Here
              <BsDashLg className="inline text-4xl ml-5" />
              <a href="https://www.instagram.com/itsavilaart/">
                <BsInstagram className="inline text-3xl ml-5" />
              </a>
              <a href="#">
                <BsTwitter className="inline text-3xl ml-5" />
              </a>
              <a href="https://www.etsy.com/shop/itsavilaart/?etsrc=sdt">
                <BiLogoEtsy className="inline text-5xl ml-3 mt-1" />
              </a>
            </p>
          </div>
          <img src="cat-vector.png" alt="Cat drawing" className="w-1/3 mr-60" />
        </div>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="-z-10 opacity-10 absolute top-0 w-1/2"
        >
          <path
            fill="#fff"
            d="M59.8,-23C65.2,-3,48.6,20.6,26.4,36.8C4.3,53,-23.6,61.9,-37,51.9C-50.5,41.9,-49.6,13,-41.1,-11.4C-32.5,-35.9,-16.3,-55.9,5.5,-57.6C27.2,-59.4,54.5,-43,59.8,-23Z"
            transform="translate(100 100)"
          />
        </svg>
        <Cards />
        <div className="text-end mr-5 text-white text-1xl">
          <h1>Made with love ♥</h1>
          <h2>David Bellver</h2>
        </div>
        <div className="bottom-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Home;
