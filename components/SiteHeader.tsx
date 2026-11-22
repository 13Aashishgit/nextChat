import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const SiteHeader = () => {
  const isSignedIn = false; // Replace with your actual authentication logic
  const isLandingPage = true; // Replace with your actual logic to determine if it's the landing page
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-200 ">
      <div className="container mx-auto px-4 py-3">
        <Link
          href={isSignedIn && isLandingPage ? "/dashboard" : "/"}
          className="flex items-center space-x-2"
        >
          <Image
            src="/brand/logo-navbar-dark.png"
            alt="Logo"
            width={32}
            height={32}
            priority
          />
          <h1 className="text-xl font-bold">My App</h1>
        </Link>
        {isLandingPage && (
          <nav className="mt-2">
            <Link
              href="#product"
              className="mr-4 text-white-700 hover:text-gray-900"
            >
              Product
            </Link>
            <Link
              href="#how-it-works"
              className=" mr-4 text-white-700 hover:text-gray-900"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className=" mr-4 text-white-700 hover:text-gray-900"
            >
              Pricing
            </Link>
          </nav>
            
        )}

        <div className="absolute right-4 top-3">
          <Button asChild variant="ghost" size="sm">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
