'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Sideview from "@/components/sideview/Sideview";
import SideNav from "@/components/sideview/SideNav";
import { useState } from "react";
import UpdateForm from "@/components/updateform/UpdateForm";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
  modals,
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div>
        <Navbar handleShowModal={handleShowModal}/>
       
        <div className="flex">
         {/* <Sideview toggleSidebar={ } isSidebarOpen={false}/> */}
        <div className="hidden md:block">
        <SideNav />
        </div>
          {children}
          {showModal && <UpdateForm handleShowModal={handleShowModal}/>}
          
        </div> 
      
       </div>
      </body>
    </html>
  );
}
