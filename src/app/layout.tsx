import "animate.css";
import "./globals.css";
import { Providers } from "./provider";

export const metadata = {
    title: "Italian Tech Innovation Ecosystem",
    description: "",
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
