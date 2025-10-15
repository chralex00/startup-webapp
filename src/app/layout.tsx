import "animate.css";
import "./globals.css";
import { Providers } from "./provider";

export const metadata = {
    title: "WebApp",
    description: "A web app containing a prototype of a radar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
