import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import AuthButton from "./header-auth";

const MobileNavigator = () => {
	const ICON_SIZE = 16;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="default" size={"sm"}>
					<Menu
						key="light"
						size={ICON_SIZE}
						className={"text-muted-foreground"}
					/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mt-2 rounded-none  " align="start">
				<DropdownMenuItem>
					<AuthButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { MobileNavigator };
