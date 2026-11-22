import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { OrganizationSwitcher, Show, SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
// import { Organization } from "@clerk/nextjs/server";

const SiteHeader = () => {
    const pathname = usePathname();

  const {isSignedIn} = useAuth(); // Replace with your actual authentication logic
  const isLandingPage = pathname === "/"; // Replace with your actual logic to determine if it's the landing page
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
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="default" size="sm">
                Get started
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <OrganizationSwitcher 
            afterCreateOrganizationUrl="/dashboard" 
            afterSelectOrganizationUrl="/dashboard" 
            
            />
            {isLandingPage && (
              <Button asChild size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}
            <UserButton/>
          </Show>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
