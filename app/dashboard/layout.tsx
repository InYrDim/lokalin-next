export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col w-full min-h-[calc(100vh-64px)]">
			<div className="flex flex-col flex-1 pt-16 pb-8 max-w-2xl">
				{children}
			</div>
		</div>
	);
}
