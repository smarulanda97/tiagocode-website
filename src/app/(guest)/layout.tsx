export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-smoke min-h-screen w-full'>
            <header className='container mx-auto flex max-w-7xl justify-between'></header>
            <main className='container mx-auto flex max-w-7xl justify-center'>
                {children}
            </main>
        </div>
    );
}
