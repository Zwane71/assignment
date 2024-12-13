'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SideNav from "@/components/sideview/SideNav";
import { useState } from "react";
import UpdateForm from "@/components/updateform/UpdateForm";
import { FormDataProvider } from "./context/FormContext";



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
}: Readonly<{
  children: React.ReactNode;
  modals: React.ReactNode;
}>) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  return (
  
    <FormDataProvider>
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
          <div className=" overlay translate ">
          {children}
          </div>
          {showModal && <UpdateForm handleShowModal={handleShowModal}/>}
          
        </div> 
      
       </div>
      </body>
    </html>
    </FormDataProvider>

  );
}
