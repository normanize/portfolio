import { ReactNode } from "react"

type AppLayoutProps = {
    children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="px-8">
            {children}
        </div>
    )
}