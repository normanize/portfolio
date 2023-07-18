import React from 'react';
import SidebarProvider from '@/context/sidebar'
import AppHeader from '@/components/header'
import AppSidebar from '@/components/sidebar'
import AppFooter from '@/components/footer'
import MainPage from '@/pages'

function App() {

  return (
    <SidebarProvider>
      <AppHeader />
      <main className='w-full min-h-screen scroll-smooth'>
        <MainPage />
        <AppFooter />
      </main>
      <AppSidebar />
    </SidebarProvider>
  );
}

export default App;
