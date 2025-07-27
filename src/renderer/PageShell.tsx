import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "../components/ui/tooltip";
import { Toaster } from "../components/ui/toaster";
import { Toaster as SonnerToaster } from "../components/ui/sonner";
import "../index.css";

const queryClient = new QueryClient();

export function PageShell({ children, pageContext, helmetContext }: { 
  children: React.ReactNode; 
  pageContext?: any;
  helmetContext?: any;
}) {
  return (
    <HelmetProvider context={helmetContext || {}}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <SonnerToaster />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
