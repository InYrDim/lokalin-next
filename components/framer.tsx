"use client";

import { motion } from "framer-motion";

export default function Framer({
	children,
	delay = 0.2,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.5, delay }}
		>
			{children}
		</motion.div>
	);
}
