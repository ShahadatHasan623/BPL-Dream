import React from "react";
import bannerMain from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center p-4 relative top-40 z-100">
        {/* Main Container with Corner Gradients */}
        <div className="relative w-full max-w-6xl overflow-hidden rounded-[40px] border-5 border-gray-200 bg-white px-8 py-15 text-center shadow-sm">
          {/* Top-Right Soft Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-100 blur-[80px] opacity-60"></div>

          {/* Bottom-Left Soft Glow */}
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-100 blur-[80px] opacity-60"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mb-3 md:text-4xl text-2xl font-extrabold tracking-tight text-gray-900">
              Subscribe to our Newsletter
            </h2>
            <p className="mb-10  text-gray-500">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-sm rounded-xl border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              />

              <button className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-[#e8a2cf] via-[#f1b47c] to-[#f6d365] px-4 py-2 font-bold text-gray-800 transition-transform hover:scale-105 active:scale-95 shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-primary-content px-25 py-10 space-y-5 absolute w-full">
        <aside className="flex justify-center mt-30">
          <img className="h-30" src={bannerMain} alt="" />
        </aside>
        <nav>
          <div className="flex md:flex-row flex-col justify-between">
            <div>
              <h1 className="footer-title">About Us</h1>
              <p>
                We are a passionate team <br /> dedicated to providing <br />
                the best services to our customers.
              </p>
            </div>
            <div className="list-none">
              <h1 className="footer-title">Quick Links</h1>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </div>
            <form>
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="w-80">
                <label>Enter your email address</label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-primary join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </nav>
        <p className="text-center mt-5 border-t-1 p-2 border-gray-700">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
