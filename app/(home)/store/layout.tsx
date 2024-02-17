import Categories from "./_components/categories";

export default function StoreLayout ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex">
            <Categories />
            {children}
        </div>
    )
}