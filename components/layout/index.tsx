import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }:any) => {

    return (
        <>
            <Head>
                <title>Sesedia Challenge</title>
            </Head>
            <div className="flex flex-col h-screen">
                <Header/>
                <main className="mb-auto">
                {children}
                </main>
                
                <Footer />
            </div>
        </>
    );
};

export default Layout;
