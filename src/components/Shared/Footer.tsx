import Logo from "../logo";

export default function Footer() {
    return (
        <div>
            <footer className="">
                <div className="relative mx-auto  px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
     

                    <div className="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div className="flex justify-center text-primary  lg:justify-start">
                                <Logo />
                            </div>

                            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                                Empowering you to manage money securely and effortlessly. Our mission is to make digital finance simple, safe, and accessible for everyone.
                            </p>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                        >
                            <li>
                                <a className=" transition " href="#"> About </a>
                            </li>

                            <li>
                                <a className=" transition " href="#"> Services </a>
                            </li>

                            <li>
                                <a className=" transition " href="#"> Projects </a>
                            </li>

                            <li>
                                <a className=" transition " href="#"> Blog </a>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
