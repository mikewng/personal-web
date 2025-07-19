import pink from "../app/assets/gallery-imgs/pink.jpg"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mike Wang</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
