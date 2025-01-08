import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-12">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://luxalgo.com/" className="flex items-center">
                            <svg
                                width="50%"
                                height="80%"
                                viewBox="0 0 180 40"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white fill-current"
                            >
                                <g clipPath="url(#clip0_308_946)" fill="currentColor">
                                    <path d="M46.234 5.729h5.854V26.02h11.459v5.007H46.234zm36.214 25.298H77.23v-2.539h-.352c-1.34 2.046-3.068 3.068-5.254 3.068-4.09 0-6.805-3.173-6.805-7.51V12.974h5.219v10.331c0 2.222 1.27 3.774 3.384 3.774 2.08 0 3.808-1.657 3.808-3.95V12.974h5.22zm41.904 0h6.081L115.941 5.729l-14.48 25.298h6.055l8.425-14.693z"></path>
                                    <path d="M101.461 12.974H96.52l-3.996 7.012-3.997-7.012h-4.941l5.144 9.027-5.144 9.026h4.879l4.06-7.122 4.057 7.122h4.879l-5.144-9.026zm30.049-8.11h5.219v26.163h-5.219zm7.083 28.491 5.043-.988c.669 1.975 2.328 3.174 4.584 3.174 2.892 0 4.761-1.904 4.761-4.867v-2.01h-.353c-1.445 1.657-3.279 2.61-5.712 2.61-5.006 0-8.533-3.702-8.533-9.273 0-5.817 3.492-9.555 8.498-9.555 2.61 0 4.478 1.059 5.889 2.821h.353v-2.291h5.077v17.84c0 5.57-3.808 8.885-9.838 8.885-5.255 0-8.887-2.291-9.769-6.346M153.156 22c0-2.962-1.975-5.112-4.761-5.112S143.6 19.039 143.6 22c0 2.892 2.009 5.007 4.795 5.007s4.761-2.117 4.761-5.007m6.815.001c0-5.817 3.984-9.59 10.014-9.59C175.98 12.41 180 16.183 180 22c0 5.854-4.019 9.591-10.015 9.591-6.03-.001-10.014-3.773-10.014-9.59m14.774 0c0-2.997-1.975-5.112-4.761-5.112-2.821 0-4.795 2.115-4.795 5.112s1.974 5.148 4.795 5.148c2.786 0 4.761-2.15 4.761-5.148M36.217 34.646l4.139-7.231L25.868 2.108 11.381 27.415h8.279l6.209-10.845z"></path>
                                    <path d="M31.042 29.224 8.267 29.22 24.833.3h-8.277L0 29.216l4.137 7.237h31.045z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                                Resources
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://luxalgo.com/" className="hover:underline">
                                        Luxalgo
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">
                                        Tailwind CSS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                                Follow us
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/themesberg/luxalgo"
                                        className="hover:underline"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                                        Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase">
                                Legal
                            </h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
