import type { Metadata } from 'next';
import { Cormorant_Garamond, Noto_Sans_SC } from 'next/font/google';
import './globals.css';
const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['400','500','600'], style: ['normal','italic'] });
const sans = Noto_Sans_SC({ variable: '--font-sans', subsets: ['latin'], weight: ['300','400','500','600'] });
export const metadata: Metadata = { title: '刘家华｜KOL 运营作品集', description: '专注小红书、Instagram、TikTok 的创作者运营与内容增长。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }
