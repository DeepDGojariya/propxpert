import React from 'react'

export default function Footer() {
    return (
        <>
            {/* fixed-bottom */}
            <footer className="text-center text-white fixed-bottom" style={{ backgroundColor: "#1B2430", height: "45px" }}>

                <div className="text-center p-3" style={{ backgroundColor: "#1B2430" }}>
                    © 2022 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">PropXpert</a>
                </div>

            </footer>
        </>
    )
}
