import './globals.css';
import SidebarProvider from '@/context/Sidebar.context';
import CartProvider from '@/context/Cart.context';

export const metadata = {
  title: 'Gibeth',
  description: 'Product gallery',
}


export default function RootLayout(props) {
  return (
    <html lang="en">
       <body>
          <SidebarProvider>
            <CartProvider>
              {props.children}
              {props.modal}
            </CartProvider>
          </SidebarProvider>
       </body>
    </html>
  )
}
