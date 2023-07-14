import React from 'react';
import SidebarProvider from '@/context/sidebar'
import AppHeader from '@/components/header'
import AppSidebar from '@/components/sidebar'
import AppFooter from '@/components/footer'
import MainPage from '@/pages'

function App() {

  return (
    <SidebarProvider>
      <main>
        <div className='flex flex-row'>
          <div className='w-full h-screen'>
            <div className='min-h-screen'>
              <AppHeader />
              <MainPage />
              <AppFooter />
            </div>
          </div>
          <AppSidebar />
        </div>
      </main>
    </SidebarProvider>
  );
}

export default App;
