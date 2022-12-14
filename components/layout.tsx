import React from "react";
import Head from "next/head";
import Header from "../components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen bg-stone-100">
            <Head>
                <title>fungeye</title>
                <meta name="description" content="Computer Vision For Fungi" />
            </Head>
            <Header />
            <main className="py-20 md:py-10">
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}