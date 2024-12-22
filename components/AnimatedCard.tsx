"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
	children: React.ReactNode;
	className?: string;
}

export default function AnimatedCard({
	children,
	className = "",
}: AnimatedCardProps) {
	return (
		<Card
			className={`relative overflow-hidden rounded-x bg-transparent ${className}0`}
		>
			<motion.div
				className={`bg-gradient-to-b from-curious-500 via-apple-600 to-apple-900`}
				style={{
					backgroundSize: "400% 400%",
				}}
				animate={{
					backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{children}
			</motion.div>
		</Card>
	);
}
